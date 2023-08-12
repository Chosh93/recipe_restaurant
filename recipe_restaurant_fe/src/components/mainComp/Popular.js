import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    display: grid;
    margin-top: 10px;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1rem;
`;

const CardView = styled.div`
    background-color: white;
    box-shadow: 1px 1px 5px black;
    display: flex;
    flex-direction: column;
    height: 320px;
    padding: 0 24px;
`;

const CardItemHeader = styled.div`
    font-size: 1.5rem;
    text-align: center;
    padding: 10px 0;
`;

const CardItemImage = styled.div`
    background-size: cover;
    height: 60%;
`;

const CardItemDesc = styled.div`
    font-size: 0.8rem;
    padding: 10px 0;
`;


const numImages = 7;
const imagePaths = Array.from({ length: numImages }, (_, index) => `../../images/cup-${index + 1}.jpg`);

const Popular = () => {

    
    return (
        <>
            <Container>
                {imagePaths.map((imagePath, index) => (
                    <CardView key={index} className="card-view">
                        <CardItemHeader>사진 제목 {index + 1}</CardItemHeader>
                        <CardItemImage
                            style={{ backgroundImage: `url(${imagePath})` }}
                            className="card-item-image"
                        />
                        <CardItemDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, numquam. Neque mollitia esse blanditiis facere.</CardItemDesc>
                    </CardView>
                ))}
            </Container>
        </>
    );
};

export default Popular;