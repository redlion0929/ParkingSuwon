const addressForm=document.querySelector(".addressForm");
const inputAddress=document.querySelector(".inputAddress");
var address="";

function handleSubmit(event) {
    event.preventDefault();
    address=inputAddress.value;
    inputAddress.value="";
    searchAddressToCoordinate(address);  
}

map.setCursor('pointer');


function searchAddressToCoordinate(address) {
  naver.maps.Service.geocode({
    query: address
  }, function(status, response) {
    if (status === naver.maps.Service.Status.ERROR) {
      if (!address) {
        return alert('Geocode Error, Please check address');
      }
      return alert('Geocode Error, address:' + address);
    }

    if (response.v2.meta.totalCount === 0) {
      return alert('결과 값이 존재하지 않습니다.');
    }

    var htmlAddresses = [],
      item = response.v2.addresses[0],
      point = new naver.maps.Point(item.x, item.y);
      console.log

    showMarker(point.x,point.y);
      
    map.setCenter(point);
    infoWindow.open(map, point);
  });
}