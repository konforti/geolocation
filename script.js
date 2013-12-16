var data = document.getElementById("data");
data.innerHTML = "Searching ...";
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    }
    else {
      data.innerHTML="Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    data.innerHTML = getContent('<br>', position);

    var send = document.getElementById("send");
    send.setAttribute('href', 'mailto: ?subject=Geolocation&body=' + getContent('%0D%0A', position));
  }
  
  function getContent(br, position) {
    return  "Latitude: " + position.coords.latitude + br +
            "Longitude: " + position.coords.longitude + br +
            "Accuracy: " + position.coords.accuracy;
  }