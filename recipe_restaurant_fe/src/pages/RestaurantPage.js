import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

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

const RestaurantPage = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [circle, setCircle] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 2,
        };

        const createdMap = new window.kakao.maps.Map(container, options);
        setMap(createdMap);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const locPosition = new window.kakao.maps.LatLng(lat, lon);
                const message = '<div style="padding:5px;">여기에 계신가요?!</div>';

                displayMarker(createdMap, locPosition, message);
                displayCircle(createdMap, locPosition);
            });
        } else {
            const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
            const message = 'geolocation을 사용할 수 없어요..';
            displayMarker(createdMap, locPosition, message);
            displayCircle(createdMap, locPosition);
        }
    }, []);

    const displayMarker = (map, locPosition, message) => {
        if (!map) return;

        const newMarker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
            draggable: true,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
            content: message,
            removable: true,
        });

        infowindow.open(map, newMarker);
        map.setCenter(locPosition);
        setMarker(newMarker);

        // 마커의 드래그 이벤트 핸들러
        newMarker.addListener('dragend', function() {
            const newPosition = newMarker.getPosition();
            map.panTo(newPosition);
            updateCirclePosition(newPosition);
        });
    };

    const displayCircle = (map, centerPosition) => {
        const newCircle = new window.kakao.maps.Circle({
            center: centerPosition,
            radius: 1000,
            strokeWeight: 5,
            strokeColor: '#75B8FA',
            strokeOpacity: 1,
            strokeStyle: 'dashed',
            fillColor: '#CFE7FF',
            fillOpacity: 0.7,
        });

        newCircle.setMap(map);
        setCircle(newCircle);
    };

    const updateCirclePosition = (newPosition) => {
        if (circle) {
            circle.setMap(null); // 기존의 원 삭제
            displayCircle(map, newPosition); // 새 원 추가
        }
    };

    return (
        <Container>
            <MapContainer id="map" ></MapContainer>
        </Container>
    )
}

export default RestaurantPage;
