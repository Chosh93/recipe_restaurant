import React, { useState } from "react";
import RestaurantMap from "../components/restaurant/RestaurantMap";
import RestaurantSearchBar from "../components/restaurant/RestaurantSearchBar";
const RestaurantPage = () => {
    const [searchKeyword, setSearchKeyword] = useState(""); // 입력된 키워드를 상태로 저장

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword); // 입력된 키워드를 상태에 저장
    }
    return (
        <>
        <RestaurantSearchBar onSearch={handleSearch} />
        <RestaurantMap searchKeyword={searchKeyword}/>
        </>
    )
}

export default RestaurantPage;
