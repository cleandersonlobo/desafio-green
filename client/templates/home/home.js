Template.home.created = function() {
  this.academias = new ReactiveVar()
  this.academia = new ReactiveVar()
  this.error = new ReactiveVar(false)
}

Template.home.rendered = function() {
  Loading.hide()
  var $instance = Template.instance()
  if(Session.get('teams')===undefined){
    $.ajax({
      dataType: "jsonp",
      crossDomain: true,
      url: 'http://jiujitsuteam.herokuapp.com/teams.json',
      timeout: 5000,
      success: function(resultado) {
        Session.set('teams',resultado)
        $instance.academias.set(Session.get('teams'))
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $instance.error.set(true)
        return false
      },
      });
  }else{
    $instance.academias.set(Session.get('teams'))
  }

}

Template.home.helpers({
  academias() {
      return Template.instance().academias.get()
    },
    error() {
      return Template.instance().error.get()
    },
    urlImg() {
      var id = this.id
      if (id < 10) {
        id = "0" + id
      }
      return"http://s3-sa-east-1.amazonaws.com/jjteamproduction/teams/pictures/000/000/0"+id + "/large/"
    }
})

Template.home.events({
  "click .academiaItem"(e,i){
    e.preventDefault();
    var id = this.id

    Loading.show()
    $.ajax({
      dataType: "jsonp",
      crossDomain: true,
      url: 'http://jiujitsuteam.herokuapp.com/teams/'+id+'.json',
      timeout: 5000,
      success: function(item) {
        var routeName = "academia";
        Session.set('academia',item)
        FlowRouter.go('/academia')
        Loading.hide()
      },
      error: function(jqXHR, textStatus, errorThrown) {
        swal('','Não foi possível consultar, tente novamente','error')
        return false
      },
    });
  },
  "click button"(e,i){
    e.preventDefault();
    i.error.set(false)
    $.ajax({
      dataType: "jsonp",
      crossDomain: true,
      url: 'http://jiujitsuteam.herokuapp.com/teams.json',
      timeout: 5000,
      success: function(resultado) {
        Session.set('teams',resultado)
        i.academias.set(Session.get('teams'))
      },
      error: function(jqXHR, textStatus, errorThrown) {
        i.error.set(true)
        return false
      },
    });
  }
})
