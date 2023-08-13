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

const RecipeStep = ({ stepTextData, stepImgData }) => {

    return (
        <>
            <View_step>
                <div className="best_tit">
                    <b>조리순서</b>
                </div>
                {stepTextData.map((step, index) => (
                    <div key={index} className="view_step_cont">
                        <div className="media-body">{step.stepText}</div>
                        {stepImgData[index] && <div><img src={stepImgData[index].stepImgUrl} alt="" /></div>}
                    </div>
                ))}
            </View_step>
        </>
    )
}

export default RecipeStep;
