import React from "react";
import { styled } from "styled-components";

const Cont_ingre2 = styled.div`
    padding: 35px 20px 0 25px;

    .best_tit {
        font-size: 24px;
        color: #000;
        padding: 0 35px 30px 35px;
    }

    .ready_ingre3 {
        padding: 0 20px 18px;
        vertical-align: top;
        display: flex;
        justify-content: space-between;
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

const Ingredients = () => {

    return (
        <>
        <Cont_ingre2>
                <div className="best_tit"><b>재료</b></div>
                <div className="ready_ingre3">
                    <ul>
                        <b className="ready_ingre3_tt">[재료]</b>
                        <li>test1<span className="ingre_unit">test1</span></li>
                        <li>test2<span className="ingre_unit">test2</span></li>
                        <li>test3<span className="ingre_unit">test3</span></li>
                        <li>test4<span className="ingre_unit">test4</span></li>
                    </ul>
                    <ul>
                        <b className="ready_ingre3_tt">[양념]</b>
                        <li>test1<span className="ingre_unit">test1</span></li>
                        <li>test2<span className="ingre_unit">test2</span></li>
                        <li>test3<span className="ingre_unit">test3</span></li>
                        <li>test4<span className="ingre_unit">test4</span></li>
                    </ul>
                </div>
            </Cont_ingre2>
        </>
    )
}

export default Ingredients;