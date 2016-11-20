// Adding the Layer and the Map
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var map = L.map('map', {
  center: [38.94, -77.01],
  zoom: 10
});
map.addLayer(layer);

function displayPolygon(){

  // Get the numbers from html inputs
  var Long = document.getElementsByName("Longitude");
  var Lat = document.getElementsByName("Latitude");
  var Rad = document.getElementsByName("Radius");

  // create polygon
  // Add the polygon to the map
  var NewCircle = L.circle([Lat, Long], {
	  color: '#2d862d',
	  fillColor: '#71f471', 
	  fillOpacity: 0.3,
	  radius: Rad,
  }).addTo(map);
  
}

