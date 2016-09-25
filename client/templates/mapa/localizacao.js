Geo = {
  success(position) {
      navigator.geolocation.clearWatch(Session.get('watchID'));
      Localizacao = {
        Latitude: position.coords.latitude,
        Longitude: position.coords.longitude
      };
        //Inicializando mapa
        mymap = L.map('map_canvas').setView([Localizacao.Latitude,Localizacao.Longitude], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: 'mapbox.streets'
        }).addTo(mymap);

    },
    error(e) {
        console.log("erro: " + e);
        navigator.geolocation.clearWatch(Session.get('watchID'));
        mymap = L.map('map_canvas').setView([Localizacao.Latitude,Localizacao.Longitude], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: 'mapbox.streets'
        }).addTo(mymap);
        return false
    }
}
