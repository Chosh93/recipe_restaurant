import React, { useEffect, useRef, useState } from "react";
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

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
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
            });
        } else {
            const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
            const message = 'geolocation을 사용할 수 없어요..';
            displayMarker(createdMap, locPosition, message);
        }
        
        const circle = new window.kakao.maps.Circle({
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            radius: 50,
            strokeWeight: 5,
            strokeColor: '#75B8FA',
            strokeOpacity: 1,
            strokeStyle: 'dashed',
            fillColor: '#CFE7FF',
            fillOpacity: 0.7,
        });

        circle.setMap(createdMap);
    }, []);

    const displayMarker = (map, locPosition, message) => {
        if (!map) return;

        const marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
        });

        const iwContent = message;
        const iwRemoveable = true;

        const infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
        });

        infowindow.open(map, marker);
        map.setCenter(locPosition);
    };

    return (
        <Container>
        <MapContainer id="map" ></MapContainer>
        </Container>
    )
}

export default RestaurantPage;