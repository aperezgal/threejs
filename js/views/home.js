  var HomeView = Backbone.View.extend({
    initialize:function () {
        console.log('Initializing Home View');
    },
    render:function () {
    	console.log('render Home View');

        // Compile the template using underscore
        var template = _.template( tpl.get('HomeView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );

        return this;
    },
  });