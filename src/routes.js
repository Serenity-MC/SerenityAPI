const handlers = require('./handlers')

const routes = [

	{
		method: 'GET',
		path: '/ping',
		config: {
			description: 'Replies with "Pong!"',
			notes: [],
			tags: [],
			auth: false
		},
		handler: handlers.ping
	},

	{
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
		handler: handlers.player
	}
]

module.exports = routes
