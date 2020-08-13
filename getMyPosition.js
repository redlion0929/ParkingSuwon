const getPosBtn=document.querySelector(".getPosition");

function handleSuccess(position) {
    const lat=position.coords.latitude.toPrecision(9);
    const lng=position.coords.longitude.toPrecision(10);
    
    map.setCenter(new naver.maps.LatLng(lat,lng));
    
    showMarker(lat,lng);

}

function handleError() {
    alert("위치를 받아 올 수 없습니다.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError,{enableHighAccuracy:true});
}

