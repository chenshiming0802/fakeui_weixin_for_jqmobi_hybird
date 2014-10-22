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
            $("#navbar").css("height","0px");
            var that = this;
            //$.ui.loadContent("#"+viewName,false,false,"slide");
            //setTimeout("T.redirect(\"#services?assignme\");",1000); 

            $("#main_1_back").bind("touchstart",function(){
                $.ui.loadContent("#main/weixin",false,false,"slide");
            });   
        },
        renderList:function(collection){
        }
    } );
    return View;

} );