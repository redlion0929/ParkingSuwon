const getPosBtn=document.querySelector(".getPosition");

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.265686,126.998787),
    map: map
});

function handleSuccess(position) {
    const lat=position.coords.latitude.toPrecision(9);
    const lng=position.coords.longitude.toPrecision(10);
    
    map.setCenter(new naver.maps.LatLng(lat,lng));
    marker.setPosition(new naver.maps.LatLng(lat,lng));

}

function handleError() {
    alert("위치를 받아 올 수 없습니다.");
    marker.setPosition(new naver.maps.LatLng(37.265686,126.998787));
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError,{enableHighAccuracy:true});
}

