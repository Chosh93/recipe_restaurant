import React from "react";
import { styled } from "styled-components";

const View_step = styled.div`
    padding: 35px 20px 0 25px;

    .best_tit {
        font-size: 24px;
        color: #000;
        padding: 0 35px 30px 35px;
    }

    b .best_tit {
        padding-bottom: 8px;
        color: #333;
        font-size: 16px;
        padding-left: 20px;
        display: block;
    }

    .view_step_cont {
        display: flex;
        align-items: center;
        padding: 20px;
        background: #fff;

        .media-body {
            flex: 1;
            font-size: 16px;
            color: #333;
        }

        img {
            max-width: 300px;
            margin-left: 20px;
        }
    }
`;

const RecipeStep = () => {

    return (
        <>
            <View_step>
                <div className="best_tit">
                    <b>조리순서</b>
                </div>
                <div id="stepDiv1" className="view_step_cont">
                    <div className="media-body">먼저 물에 소금1T,식초1T를 섞어 달걀을 7-8분 반숙으로 삶아 줍니다.</div>
                    <div><img src="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/01/782ee45be0c4ad4c14de82fc002024251.jpg" alt="Step 1" /></div>
                </div>
                {/* {stepData.map((step, index) => (
                    <div key={index} className="view_step_cont">
                        <div className="media-body">{step.description}</div>
                        <div><img src={step.imageUrl} alt={step.altText} /></div>
                    </div>
                ))} */}
            </View_step>
        </>
    )
}

export default RecipeStep;
