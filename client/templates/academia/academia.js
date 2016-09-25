Template.academia.created = function(){
  this.marker = new ReactiveVar()
  this.activeItem = new ReactiveVar()
}
Template.academia.destroyed = function(){
  //Removendo marker
  if(Template.instance().marker.get() !== undefined){
      mymap.removeLayer(Template.instance().marker.get())
  }
  mymap.panTo([Localizacao.Latitude,Localizacao.Longitude]);
    Session.delete('academia')
}
Template.academia.rendered = function(){
  if(Session.get('academia').places[0] !==undefined){
    var gym = Session.get('academia').places[0].gym
    Template.instance().activeItem.set(Session.get('academia').places[0].id)
    if(Template.instance().marker.get() !== undefined){
      mymap.removeLayer(Template.instance().marker.get())
    }
    IconMarker = L.icon({
      iconUrl: 'images/marker-icon.png',
      iconRetinaUrl: 'images/marker-icon-2x.png',
      iconSize: [25, 41],
       popupAnchor: [0, -12],
      shadowUrl: 'images/marker-shadow.png',
      shadowSize: [41, 41]
    });
    Template.instance().marker.set(L.marker([gym.lat,gym.lng],{
      icon:IconMarker,
    }))
    Template.instance().marker.get().addTo(mymap);
    mymap.panTo([gym.lat,gym.lng]);
    Template.instance().marker.get().bindPopup("<p><b>"+gym.title+"</b><br>"+
    ""+gym.address+"</p>"
      ).openPopup();
  }
}
Template.academia.helpers({
  academia(){
    return Session.get('academia')
  },
  activeItem(){
    if(Template.instance().activeItem.get() !== undefined){
      if(Template.instance().activeItem.get() === this.id){
        return "activeItem"
      }else{
        return ""
      }
    }
    return ""
  }
});

Template.academia.events({
  "click .academiaItem" (e,i){
    e.preventDefault()
    i.activeItem.set(this.id)
    if(i.marker.get() !== undefined){
      mymap.removeLayer(i.marker.get())
    }
    IconMarker = L.icon({
      iconUrl: 'images/marker-icon.png',
      iconRetinaUrl: 'images/marker-icon-2x.png',
      iconSize: [25, 41],
       popupAnchor: [0, -12],
      shadowUrl: 'images/marker-shadow.png',
      shadowSize: [41, 41]
    });
    i.marker.set(L.marker([this.gym.lat,this.gym.lng],{
      icon:IconMarker,
    }))
    i.marker.get().addTo(mymap);
    mymap.panTo([this.gym.lat,this.gym.lng]);
    i.marker.get().bindPopup("<p><b>"+this.gym.title+"</b><br>"+
    ""+this.gym.address+"</p>"
      ).openPopup();

  }
});
