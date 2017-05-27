const routes = [
	{
		method: "GET",
		path: "/ping",
		config: {
			description: "Replies with \"Pong!\"",
			notes: [],
			tags: []
		},
		handler: (request, reply) => {
			console.log("Pong!")
			reply("Pong!")
		}
	}
]

module.exports = routes
