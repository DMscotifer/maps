const MapWrapper = function(element, coords, zoom) {
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  this.map.on("click", function(event) {
    this.addMarker(event.latlng);
  }.bind(this))
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = L.marker(coords).addTo(this.map);
  marker.bindPopup(`${coords} `).openPopup();
};

MapWrapper.prototype.addCircle = function (coords) {
  const circle = L.circle(coords, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 250
  }).addTo(this.map)
};

MapWrapper.prototype.flyToCity = function(coords) {
  this.map.flyTo(JSON.parse(coords), 10);
};

MapWrapper.prototype.showPopup = function (coords, message, url) {
  const marker = L.marker(coords).addTo(this.map);
  marker.bindPopup(message + "<img src='"+ url +"&previewImage=true maxheight=10 maxwidth=10'>").openPopup().maxHeight(10).maxWidth(10);
};
