'use strict'

const resolver = require('./resolver').resolver

const handlers = {

    ping(request, reply) {
        request.log(['ping', 'pong', 'request'], 'Pong!')
        reply('Pong!')
    },

    player(request, reply) {
        let player

        request.log(['uuid', 'user', 'request'], 'Player Request:')
        player = resolver.resolveSerenityPlayer(request.params.uuid)

        if (player) {
            reply(player)
        } else {
            reply().code(204)
        }
    }

}

module.exports = handlers