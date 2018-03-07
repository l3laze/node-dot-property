# node-dot-property

> get/set/remove/has for any object using dot-notation path with reasonable defaults.

----

[![Travis-CI Build Status](https://travis-ci.org/l3laze/node-dot-property.svg?branch=master)](https://travis-ci.org/l3laze/node-dot-property?branch=master)  [![Codecov branch](https://img.shields.io/codecov/c/github/l3laze/node-dot-property.svg)](https://codecov.io/gh/l3laze/node-dot-property/list/master/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6ed65fbed2045898af18d65e7aea493)](https://www.codacy.com/app/l3laze/node-dot-property)

[![Dev Dependencies](https://img.shields.io/david/dev/expressjs/express.svg)](https://github.com/l3laze/node-dot-property)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

----

# "API"

#### [set](#set) (obj, path, val)

> Set `val` at `path` of `obj`. Will create last entry of path if it does not exist.

----

#### [get](#get) (obj, path)

> Get `val` at `path` of `obj`. Will return undefined for a nonexistent path.

----

#### [has](#has) (obj, path)

> Check if `obj` has a `val` at `path`. Will return false for a nonexistent path.

----

#### [remove](#remove) (obj, path)

> Remove `val` at `path` of `obj`. Will do nothing for a nonexistent path.

----

`obj` is the `Object`, `path` is the dot-notation path to a property, and `val` is the value to set for the property.
