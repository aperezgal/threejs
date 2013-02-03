/*! Main Javascript file
Alberto Perez Galiano
*/


window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "three": "three"
    },

    initialize: function () {
       
        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
        
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
    },
    
    three: function () {
        if (!this.threeView) {
            this.threeView = new ThreeView();
            this.threeView.render();
        }
        $('#content').html(this.threeView.el);
    },


});

tpl.loadTemplates(['HomeView', 'ThreeView'], function() {
    app = new Router();
    Backbone.history.start();
});



