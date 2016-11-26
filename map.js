// Adding the Layer and the Map
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var map = L.map('map', {
  center: [38.94, -77.01],
  zoom: 10
});
map.addLayer(layer);

function createPolygon(latitude, longitude, radius){
  // Create polygon and add it to the map
  var circle = L.circle([latitude, longitude], {
    color: "#1c7119",
    fillColor: "#00b33c",
    fillOpacity: 0.3,
    radius: radius
  }).addTo(map);

  // Change the center and the view to be center of circle
  map.setView(new L.LatLng(latitude, longitude), 13);
};

function createPolygonFromCoordinates(){
  // Get the numbers from html inputs
  var longitude = Number(document.getElementsByName("Longitude")[0].value);
  var latitude = Number(document.getElementsByName("Latitude")[0].value);
  var radius = Number(document.getElementsByName("Radius")[0].value);
  createPolygon(latitude, longitude, radius);
  
};

function createPolygonFromAddress() {

};