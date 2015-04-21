# MiniRouter

An extremely simple router for firing page-specific javascript when the page first loads. It isn't meant to be used on the server and it isn't meant to be used for single pages apps.

## Usage:

On instantiation, MiniRouter expects to receive a route object
with each key as a URL regex and each value as a function to call when
the route regex matches the current URL.

```js
var router = new MiniRouter({
    '/$': function() {},
    '/about': function() {},
    '/approach': function() {},
    '/work/(.*)': function() {}
});
```

## Testing:

Run tests on command line with:

```
npm test
```