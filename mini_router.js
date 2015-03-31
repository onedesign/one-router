function MiniRouter(routes) {
  
  /*
  USAGE:
  
  On instantiation, MiniRouter expects to receive a route object
  with each key as a URL regex and each value as a function to call when
  the route regex matches the current URL.

  var router = new MiniRouter({
    '/$': function() {},
    '/about': function() {},
    '/approach': function() {},
    '/work/(.*)': function() {}
  });
  */
 
  //
  //   Private Vars
  //
  //////////////////////////////////////////////////////////////////////
 
  var self = {
    
  };
 
 
  //
  //   Public Vars
  //
  //////////////////////////////////////////////////////////////////////
 
  self.routes = routes;
 
 
  //
  //   Private Methods
  //
  //////////////////////////////////////////////////////////////////////
 
  var _init = function() {
    _route();
  };
 
  var _route = function() {
    var currentUrl = document.URL;
    
    // Run through each route until we find a match
    for (var key in self.routes) {
      var routeFunction = self.routes[key];
      var re = new RegExp(key, 'i');
      var matchResult = currentUrl.match(re);
      if (matchResult) routeFunction();
    }
  };
 
 
  //
  //   Public Methods
  //
  //////////////////////////////////////////////////////////////////////
  
  self.addRoute = function(routeObject) {
    for (var key in routeObject) {
      self.routes[key] = routeObject[key];
    }
  };
 
  // Initiate
  _init();
 
  // Return the Object
  return self;
}