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
  //var inputs = ('CircleInputs');
  var Long = document.getElementsByName("Longitude")[0].value;
  var Lat = document.getElementsByName("Latitude")[0].value;
  var Rad = document.getElementsByName("Radius")[0].value;

  // create polygon
  // Add the polygon to the map
  var CircleProperties = {
	radius: Rad,
    fillColor: "#00b33c",
    color: "#1c7119",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.3
  };
  
  var NewPoint = {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [Long, Lat]
		}
  };
	
  L.geoJSON(NewPoint, {
	  pointToLayer: function (feature, latlng) {
		  return L.circleMarker(latlng, CircleProperties);
	  }
  }).addTo(map);
  
}

