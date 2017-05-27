const Hapi = require("hapi")
const routes = require("./routes")

const server = new Hapi.Server()
server.connection({ host: "localhost", port: 9090 })

server.route(routes)

server.start(err => {
	if (err) {
		console.error(err);
		server.stop();
	}

	console.log(`The server is listening on ${server.info.uri}`)
}) 
