import requests
from bs4 import BeautifulSoup
import pymysql

# MySQL 연결 설정
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '1234',
    'database': 'recipe_restaurant'
}

connection = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234', db='recipe_restaurant')
cursor = connection.cursor()

# 크롤링할 URL 설정
base_url = 'https://www.10000recipe.com/recipe/list.html?q=%EC%A4%91%EC%8B%9D'
starting_page = 1
num_pages = 50  # 크롤링할 페이지 수

# 페이지 목록 만들기
recipe_links = []
for page_num in range(starting_page, starting_page + num_pages):
    url = f'{base_url}{page_num}'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    links = soup.find_all('a', class_='common_sp_link')
    recipe_links.extend([link['href'] for link in links])
print(recipe_links)
recipe_url = 'https://www.10000recipe.com'

for link in recipe_links:
    cleaned_link = link.replace('/recipe/', '')  # "/recipe/" 부분을 제거한 값을 저장
    response = requests.get(recipe_url + link)
    recipe_soup = BeautifulSoup(response.content, 'html.parser')

    # 음식 이름
    h3_text = recipe_soup.find('h3').text.strip()

    # 음식 이미지
    img_src = recipe_soup.find('img', id='main_thumbs')['src']

    # 간단한 설명
    intro_elem = recipe_soup.find('div', id='recipeIntro')
    intro = intro_elem.text.strip() if intro_elem else ""

    # 재료, 소스재료, 양념 등의 데이터 배열 저장
    ingredient_list = []

    # 재료, 소스재료, 양념 등의 텍스트 패턴 리스트
    ingredient_patterns = ['[재료]', '[소스재료]', '[양념]']

    # 조리과정 부분
    step_div = recipe_soup.find('div', class_='view_step')
    step_divs = step_div.find_all('div', class_='view_step_cont')
    step_text_list = []
    step_img_urls = []

    for step_div in step_divs:
        step_number = step_div['id'].replace('stepDiv', '')
        step_text = step_div.find('div', class_='media-body').text.strip()
        step_text_list.append(f"Step {step_number}: {step_text}")
        step_img = step_div.find('img')
        if step_img:
            step_img_urls.append(step_img['src'])

    # 각 페이지의 HTML 구조에 대한 분석 코드
    ingre_div = recipe_soup.find('div', id='divConfirmedMaterialArea')
    if ingre_div:
        ul_tags = ingre_div.find_all('ul')
        for ul_tag in ul_tags:
            b_tag = ul_tag.find('b', class_='ready_ingre3_tt')
            if b_tag:
                b_text = b_tag.text.strip()
                if any(pattern in b_text for pattern in ingredient_patterns):
                    li_tags = ul_tag.find_all('li')
                    for li_tag in li_tags:
                        name = li_tag.get_text(strip=True)
                        unit_tag = li_tag.find('span', class_='ingre_unit')
                        if unit_tag:
                            unit = unit_tag.get_text(strip=True)
                        else:
                            unit = ""
                        # 구매 버튼과 단위 제거하고 이름과 단위만 사용
                        name_parts = name.split('구매')
                        cleaned_name = name_parts[0].strip()
                        ingredient_list.append(f"{cleaned_name} {unit}")

    # 재료 리스트를 문자열로 변환
    ingredient_text = '\n'.join(ingredient_list)

    # SQL 쿼리 실행하여 데이터베이스에 저장
    insert_query = "INSERT INTO recipes (food_id, name, thumb_img, intro, ingredients, class) VALUES (%s, %s, %s, %s, %s, %s)"
    data = (cleaned_link, h3_text, img_src, intro, ingredient_text, "중식")
    cursor.execute(insert_query, data)
    connection.commit()

    # 마지막으로 추가한 레시피의 id를 가져옴
    cursor.execute("SELECT LAST_INSERT_ID()")
    last_insert_id = cursor.fetchone()[0]

    # 조리 과정 저장
    step_text_list = []

    for step_div in step_divs:
        step_number = step_div['id'].replace('stepDiv', '')
        step_text = step_div.find('div', class_='media-body').text.strip()
        step_text_list.append((cleaned_link, int(step_number), step_text))

    # recipes_step_text 테이블에 데이터 저장
    step_text_insert_query = "INSERT INTO recipes_step_text (food_id, step_number, step_text) VALUES (%s, %s, %s)"
    cursor.executemany(step_text_insert_query, step_text_list)
    connection.commit()

    # recipes_step_imgUrl 테이블에 데이터 저장
    step_img_insert_query = "INSERT INTO recipes_step_imgurl (food_id, step_number, step_imgUrl) VALUES (%s, %s, %s)"
    for step_number, step_img_url in enumerate(step_img_urls, start=1):
        step_img_data = (cleaned_link, step_number, step_img_url)
        cursor.execute(step_img_insert_query, step_img_data)
        connection.commit()

# 연결 해제
cursor.close()
connection.close()
