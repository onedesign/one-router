// Setup

var APP = {
  indexRoute: function () {},
  segmentRoute: function () {},
  multipathRoute: function () {}
};

var routes = {
  '/$':               APP.indexRoute,
  '/(.*)':            APP.segmentRoute,
  '/multipath/(.*)':  APP.multipathRoute
};

var router = new MiniRouter(routes);

// Tests

it('should find an index route (with trailing slash)', function () {
  assert.isTrue(router.matchPathToRoute('/$', '/'));
});

it('should find a route with one defined segment', function () {
  assert.isTrue(router.matchPathToRoute('/something', '/something'));
});

it('should find a route with one undefined segment', function () {
  assert.isTrue(router.matchPathToRoute('/(.*)', '/the-thing-to-do'));
  assert.isTrue(router.matchPathToRoute('/(.*)', '/another-thing'));
});

it('should find a route with multiple segments', function () {
  assert.isTrue(router.matchPathToRoute('/the-institute/(.*)', '/the-institute/team'));
});