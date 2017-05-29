'use strict'

const dummyDB = require('./config/dummyDB')

const resolver = {
    resolveSerenityPlayer(uuid) {
        for (let player of dummyDB.SerenityPlayers) {
            if (player.uuid == uuid) {
                return player
            } else {
                return null
            }
        }
    }
}

module.exports = {
    resolver
}