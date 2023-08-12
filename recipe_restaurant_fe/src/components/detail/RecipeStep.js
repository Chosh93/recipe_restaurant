import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid #e6e7e8;
    padding: 0 0 20px 0;
    background: #fff;
`;

const View_pic = styled.div`
    margin: 0 auto;
    padding: 60px 0 70px;
    position: relative;
    text-align: center;
    background: #e7e8e9;
    max-width: 760px;
`;

const Centeredcrop = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
`;

const View_summary = styled.div`
    width: 760;
    margin: 40px auto 0;
    padding-bottom: 40px;

    h3 {
        font-size: 34px;
        letter-spacing: -0.05em;
        line-height: 1.3;
        padding: 0 10px;
        text-align: center;
    }
`;

const View_summary_in = styled.div`
    position: relative;
    padding: 2px 10px 10px 10px;
    color: #aaa;
    font-size: 16px;
    line-height: 170%;
    font-style: normal;
    margin: 0;
    width: 100%;
    text-align: center;
`;

const Cont_ingre2 = styled.div`
    padding: 35px 20px 0 25px;

    .best_tit {
        font-size: 24px;
        color: #000;
        padding: 0 35px 30px 35px;
    }

`;

const RecipeStep = () => {

    return (
        <Container>
            <View_pic>
                <Centeredcrop>

                </Centeredcrop>
            </View_pic>
            <View_summary>
                <h3>testtest</h3>
                <View_summary_in>
                    asdfasdf
                </View_summary_in>
            </View_summary>
            <Cont_ingre2>
                <div className="best_tit"><b>재료</b></div>
            </Cont_ingre2>
        </Container>
    )
}

export default RecipeStep;