  var ThreeView = Backbone.View.extend({
    initialize:function () {
        console.log('Initializing ThreeView View');
    },
    render:function () {
    	console.log('render ThreeView View');
       
          // Compile the template using underscore
        var template = _.template( tpl.get('ThreeView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );


        return this;
    },
  });