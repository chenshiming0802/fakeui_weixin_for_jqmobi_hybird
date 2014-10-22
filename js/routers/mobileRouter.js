// Mobile Router
// =============
define([
    "jquery",
    "backbone",
    "../views/index",
    //customer view-xml
    "../views/testpage",
    "../views/main",
    "../views/main_1"
], function(
    $,
    Backbone,
    index,
    //cusomter view-obj
    testpage,
    main,
    main_1
) {
    var viewCache = new Array();
    var CategoryRouter = Backbone.Router.extend({
        initialize: function() {
            Backbone.history.start();
        },
        routes: {
            "": "index",
            ":viewName": "view",
            ":viewName/:param": "view"
        },
        createView: function(viewName, param) {
            //var viewClass = viewName.substring(0, 1).toUpperCase() + viewName.substring(1, viewName.length) + "";
            viewClass = viewName;
            var obj = {};
            obj.__proto__ = eval(viewClass).prototype;
            //alert(viewClass+"/"+obj+"/"+param);
            eval(viewClass).call(obj, param);
            viewCache[viewName] = obj;
            return obj;
        },
        index: function() {
            this.view("index", null);
        },
        view: function(viewName) {
            this.view(viewName, null);
        },
        view: function(viewName, param) {
            //$.mobile.loading( "show" );
            var params;
            if (param == null || param == '') {
                params = new Array();
            } else {
                params = param.split(",");
            }
            T.log("create view-#" + viewName);
            //$.ui.removeFooterMenu();
            //$.ui.toggleHeaderMenu(false);
            //$.ui.toggleNavMenu(false);
            //$.ui.disableTabBar();            
            this.createView(viewName, {
                el: "#" + viewName
            }).onLoad(viewName, params);
            //$.mobile.loading('hide');
        }
    });
    return CategoryRouter;

});