Template.mapa.rendered = function() {


  var watchID = navigator.geolocation.watchPosition(Geo.success, Geo.error, {
    maximumAge: 0,
    timeout: 8000,
    enableHighAccuracy: true,
  });
  Session.set('watchID', watchID)
}
