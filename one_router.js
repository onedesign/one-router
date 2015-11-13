(function() {
  function OneRouter(routes) {
    
    /*
    USAGE:
    
    On instantiation, OneRouter expects to receive a route object
    with each key as a URL regex and each value as a function to call when
    the route regex matches the current URL.

    var router = new OneRouter({
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
      self.route(window.location.pathname);
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

    self.matchPathToRoute = function(routeRegExp, str) {
      var re = new RegExp(routeRegExp, 'i');
      var matchResult = str.match(re);
      return (matchResult) ? true : false;
    };
   
    self.route = function(urlString) {
      var currentUrl = urlString;
      
      // Run through each route until we find a match
      for (var key in self.routes) {
        // Determine which function matches this route
        var routeFunction = self.routes[key];

        // Check to see if the current url matches this route pattern
        var matchResult = self.matchPathToRoute(key, currentUrl);
        
        // We have a match!
        if (matchResult) {
          // Error if no route function is found
          if (!routeFunction) throw new Error('No function was defined for this route.');

          // Fire the route!
          routeFunction();
        }
      }
    };
   
    // Initiate
    _init();
   
    // Return the Object
    return self;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = OneRouter;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return OneRouter;
      });
    } else {
      window.OneRouter = OneRouter;
    }
  }
})();
