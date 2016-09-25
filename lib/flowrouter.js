FlowRouter.route('/', {
  action: function() {
    name: 'home',
    BlazeLayout.render("layout", {
      main: "home",
      nav: "nav"
    });
  }
});
FlowRouter.route('/academia', {
  action: function() {
    name: 'academiaItem',
    BlazeLayout.render("layout", {
      main: "academia",
      nav: "navResultado"
    });
  }
});
