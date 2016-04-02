"use strict";

const Q = require('q')
const request = require('request')


// simpleRequest = denodeified version of request
let simpleRequest = Q.denodeify(request)

// denodeify all other methods (e.g. get, post, put, etc)
Object
    .keys(request)
    .filter((key) => typeof request[key] === 'function')
    .forEach((key) => simpleRequest[key] = Q.denodeify(request[key]))

// export denodeified package
module.exports = simpleRequest