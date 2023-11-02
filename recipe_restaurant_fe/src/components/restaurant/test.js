import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-left: 10px;
    width: 1000px;
    height: 800px;
    justify-content: center;
`

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Test = () => {
    const { kakao } = window;
    const [map, setMap] = useState(null); // 지도 객체 상태
    const [position, setPosition] = useState(null); // 위치 정보 상태
    const [selectType, setSelectType] = useState(""); // 선택 타입 상태
    const [searchInputValue, setSearchInputValue] = useState(""); // 검색어 상태

    // 기타 필요한 상태 변수 정의

    // 여기서 ps를 초기화합니다.
    const ps = new kakao.maps.services.Places();

    // getSearchResult 함수 정의
    const getSearchResult = (type) => {
        if (!map) return;
        const options = {
            category_group_code: "FD6",
            location: new kakao.maps.LatLng(
                map.getCenter().getLat(),
                map.getCenter().getLng()
            ),
        };
        if (type === "CATEGORY") {
            // 카테고리 검색 관련 로직 구현
        } else if (type === "SELECT") {
            // 선택 검색 관련 로직 구현
        } else {
            // 일반 검색 관련 로직 구현
        }
    };

    // callback 함수 정의
    const kakaoMapCallback = (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            // 검색 결과가 OK인 경우 처리
            const bounds = new kakao.maps.LatLngBounds();
            let markers = [];
            // 여기서 검색 결과 처리 로직을 구현
            for (var i = 0; i < data.length; i++) {
                markers.push({
                    position: {
                        lat: data[i].y,
                        lng: data[i].x,
                    },
                    content: data[i].place_name,
                    data: data[i],
                });
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            // 여기서 마커 표시 및 지도 범위 설정 로직을 구현
            setMarkers(markers);
            if (isUseBounds) map.setBounds(bounds);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색 결과가 없는 경우 처리
            setMarkers([]);
        } else if (status === kakao.maps.services.Status.ERROR) {
            // 검색 중 오류가 발생한 경우 처리
        }
    };

    useEffect(() => {
        // map 객체를 초기화하고 위치 정보를 가져오는 로직을 구현
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(lat, lon),
                    level: 5,
                };

                const newMap = new kakao.maps.Map(container, options);
                setMap(newMap);
                setPosition(position);

                // 이후 검색 및 마커 관련 로직 호출
                getSearchResult("CATEGORY");
                getSearchResult("SELECT");
            });
        }
    }, []);

    // handleSearchButton 함수 정의
    const handleSearchButton = () => {
        getSearchResult();
    };

    // 필요한 상태 및 함수 추가 및 정의

    return (
        <Container>
            <MapContainer id="map"></MapContainer>
            {/* 검색 버튼 및 결과 표시 영역 추가 */}
        </Container>
    );
}

export default Test;
