const routes = [
	{
		method: 'GET',
		path: '/ping',
		config: {
			description: 'Replies with "Pong!"',
			notes: [],
			tags: []
		},
		handler: (request, reply) => {
			request.log(['ping', 'pong', 'request'], 'Pong!')
			reply('Pong!')
		}
	}
]

module.exports = routes
