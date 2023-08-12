import styled from "styled-components"
import React, { useState } from "react";
import {MdSearch} from "react-icons/md"

const SearchContainer = styled.div`
    position: relative;
    top: 5%;
    border: 0.2rem solid #333;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 40px;
    text-align: center;
    display: flex;
    z-index: 1;
    background-color: white;
    @media (max-width: 768px) {
        width: 70%;
        top: 0%;  
    }
    @media (max-width: 420px) {
        
        height: 30px;
  }
`;
const Input = styled.input`
    width: 80%;
    height: 90%;
    border: none;
    border-style: none;
    outline: none;
    position: absolute;
    left : 20px;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 14px;
      
    }
`;

const SearchButton = styled(MdSearch)`
    width : 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    cursor: pointer;
    @media (max-width: 420px) {
        width: 20px;
        height: 20px;
    }
`

const SearchBox = ({handlePlayList}) => {

    const [keyword, setKeyword] = useState("");
    const [keywordArr, setKeywordArr] = useState([]);

    const onChangeKeyword = (e) => {
        const value = e.target.value;
        setKeyword(value);
        setKeywordArr(value.split(" "));
    }

    const onClickSearch = async() => {
        // console.log(keywordArr)
        // try{
        //     const rsp = await MainApi.searchPlayList(keywordArr);
        //     if(rsp.status === 200){
        //         console.log(rsp.data);
        //         handlePlayList(rsp.data);
        //     }
        // } catch(error){
        //     console.log(error);
        // }
        
    }
       // 엔터버튼
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClickSearch();
        }
    }

    return(
        <SearchContainer>
            <Input placeholder="음식을 검색하세요!" value={keyword} onChange={onChangeKeyword} onKeyDown={handleKeyPress}/>
            <SearchButton onClick={onClickSearch} />
        </SearchContainer>
    
    )
}

export default SearchBox;