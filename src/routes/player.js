'use strict'

const resolver = require('../resolver').resolver

module.exports = {
    method: 'GET',
    path: '/player/{uuid}',
    config: {
        description: 'Returns a player\'s row.',
        notes: ['Requires the player\s UUID.'],
        tags: ['player', 'uuid'],
        auth: {
            strategy: 'bearer',
            scope: 'admin'
        }
    },
    handler: (request, reply) => {
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