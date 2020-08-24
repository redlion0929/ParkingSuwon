const addressForm=document.querySelector(".addressForm");
const inputAddress=document.querySelector(".inputAddress");
var address="";
var ps = new kakao.maps.services.Places(); 

function handleSubmit(event) {
    event.preventDefault();
    address=inputAddress.value;
    inputAddress.value="";
    ps.keywordSearch(address, placesSearchCB);   
}

map.setCursor('pointer');


function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        for (var i=0; i<data.length; i++) {
            showMarker(data[i].y,data[i].x);    
        }       
    } 
}