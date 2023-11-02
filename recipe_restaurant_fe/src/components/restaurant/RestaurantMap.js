import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-left: 10px;
    width: 1000px;
    height: 800px;
    justify-content: center;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 50%;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 10px;
    background-color: #f7f7f7;
    overflow-y: scroll;
`;

const PlaceInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
`;

const RestaurantMap = ({ searchKeyword }) => {
    const [marker, setMarker] = useState(null);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [places, setPlaces] = useState([]); // 검색 결과 리스트

    useEffect(() => {
        if ("geolocation" in navigator) {
            // 현재 위치 정보를 가져오기
            var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(lat, lon),
                    level: 5,
                };

                const map = new window.kakao.maps.Map(container, options);

                // 마커 생성
                const initialMarkerPosition = new window.kakao.maps.LatLng(lat, lon);
                const newMarker = new window.kakao.maps.Marker({
                    position: initialMarkerPosition,
                    map: map,
                });

                setMarker(newMarker);
                setMarkerPosition(initialMarkerPosition);

                // 마커의 드래그 이벤트 핸들러
                window.kakao.maps.event.addListener(newMarker, "dragend", function () {
                    const newPosition = newMarker.getPosition();
                    map.panTo(newPosition);
                    setMarkerPosition(newPosition);
                });

                // 카칼맵 검색함수 이용
                const ps = new window.kakao.maps.services.Places();

                // 검색 범위를 설정 (10km)
                const radius = 1500; // 10km를 미터 단위로 설정

                // 카카오맵 검색 결과를 콜백하는 함수
                const placesSearch = (data, status, pagination) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        setPlaces(data); // 검색 결과를 저장
                        let bounds = new window.kakao.maps.LatLngBounds();
                        for (let i = 0; i < data.length; i++) {
                            searchMarker(data[i]);
                            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                        }
                    }
                };

                // 입력된 검색 키워드의 결과를 처리하는 코드
                ps.keywordSearch(searchKeyword, placesSearch, {
                    location: new window.kakao.maps.LatLng(lat, lon),
                    radius: radius,
                });

                // 검색 결과로 나온 결과의 위치에 마커 생성
                const searchMarker = (place) => {
                    let marker = new window.kakao.maps.Marker({
                        map: map,
                        position: new window.kakao.maps.LatLng(place.y, place.x),
                        image: null,
                    });

                    window.kakao.maps.event.addListener(marker, "click", () => {
                        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                        infowindow.open(map, marker);
                    });
                }
            });
        }
    }, [searchKeyword]);

    return (
        <Container>
            <MapContainer id="map"></MapContainer>
            <InfoContainer>
                {places.map((place, index) => (
                    <PlaceInfo key={index}>
                        <h2
                            onClick={() => {
                                window.open(place.place_url, "_blank");
                            }}
                        >
                            {place.place_name}
                        </h2>
                        <p>거리: {place.distance}m</p>
                    </PlaceInfo>
                ))}
            </InfoContainer>
        </Container>
    );
};

export default RestaurantMap;
