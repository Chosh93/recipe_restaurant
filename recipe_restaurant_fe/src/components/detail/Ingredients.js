import React from "react";
import { styled } from "styled-components";

const Cont_ingre2 = styled.div`
    padding: 35px 20px 0 25px;

    .best_tit {
        font-size: 24px;
        color: #000;
        padding: 0 35px 30px 35px;
        justify-content: center;
    }

    .ready_ingre3 {
        padding: 0 20px 18px;
        vertical-align: top;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        b .ready_ingre3_tt {
            padding-bottom: 8px;
            color: #333;
            font-size: 16px;
            padding-left: 20px;
            display: block;
        }

        ul {
            padding: 0 0 25px 0;
            width: 50%; /* 요소의 width를 50%로 설정 */
            vertical-align: top;
            list-style: none; /* 목록 스타일 제거 */
            margin: 0; /* margin 제거 */
        }

        li {
            border-bottom: 1px solid #ececec;
            padding: 10px 6px;
            list-style: none;
            font-size: 16px;
            font-weight: 300;
            text-align: left;
        }

        .ingre_unit{
            float: right;
            color: #999;
            margin-top: 2px;
            padding-right: 50px
        }
    }
`;

const Ingredients = ({ recipeData }) => {
    if (!recipeData || !recipeData.ingredients) {
        return <div>Loading...</div>; // 적절한 로딩 컴포넌트나 메시지를 추가하세요
    }

    const parsedIngredients = parseIngredients(recipeData.ingredients);

    return (
        <Cont_ingre2>
            <div className="best_tit"><b>재료</b></div>
            <div className="ready_ingre3">
                <ul>
                    <b className="ready_ingre3_tt">[재료]</b>
                    {parsedIngredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name}
                            <span className="ingre_unit">{ingredient.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Cont_ingre2>
    )
}

const parseIngredients = (ingredients) => {
    const lines = ingredients.split('\n');
    const parsedIngredients = lines.map(line => {
        const lastSpaceIndex = line.lastIndexOf(' ');
        const name = line.substring(0, lastSpaceIndex).trim();
        const quantity = line.substring(lastSpaceIndex).trim();
        return { name, quantity };
    });
    return parsedIngredients;
}


export default Ingredients;