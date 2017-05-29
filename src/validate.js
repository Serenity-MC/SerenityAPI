'use strict'

const Boom = require('boom')
const resolver = require('./resolver').resolver
const dummyDB = require('./config/dummyDB')

function validate(token, callback) {

    for (let player of dummyDB.SerenityPlayers) {
        if (player.token == token) {
            callback(null, true, { token: player.token, scope: player.permission })
        } else 
        if (token) {
            callback(Boom.unauthorized('Invalid access token', 'authBearer'))
        } else {
            callback(Boom.unauthorized(null, 'authBearer'))
        }
    }

}

module.exports = validate