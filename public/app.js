const drawMap = function() {
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.8642, -4.2518]
  const chania = [35.5138, 24.0180]
  const oban = [56.415157, -5.471046999999999]
  const soundOfMull = [56.5430, -5.9467]
  const castleBlack = [56.5104, -5.4019]
  const zoomLevel = 10;
  const viewLocal = [56.393891, -5.731208];
  const mainMap = new MapWrapper(mapDiv, viewLocal, zoomLevel);
  // const secondMap = new MapWrapper(mapDiv, chania, zoomLevel);
  // mainMap.addMarker(glasgow);
  mainMap.addCircle(oban);
  mainMap.addCircle(soundOfMull);
  mainMap.addCircle(castleBlack);

  // mainMap.showPopup(castleBlack, "Castle Barcaldine", "https://photos.francisfrith.com/frith/barcaldine-castle-entrance-1949_b32003_index.jpg");

  var buttons = document.getElementsByTagName('button');
    for (button of buttons) {
      button.addEventListener("click", function() {
        mainMap.flyToCity(this.value)
      })
  }

  const getLocation = function(position) {
  var coords = position.coords;
  var homeButton = document.getElementById('home-button');
  homeButton.value = JSON.stringify([coords.latitude, coords.longitude]);
}

}



window.addEventListener("load", drawMap);
