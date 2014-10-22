// Category View
// =============
define([
	"jquery",
	"backbone"
], function( $, Backbone ) {
    
    var View = Backbone.View.extend( {
        initialize: function() {
        },
        onLoad:function(viewName,params){
            var that = this;
            //$.ui.loadContent("#"+viewName,false,false,"slide");
            //setTimeout("T.redirect(\"#services?assignme\");",1000);    
        },
        renderList:function(collection){
        }
    } );
    return View;

} );