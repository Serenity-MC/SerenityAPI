const Hapi = require('hapi')
const serverConfig = require('./config/server')
const routes = require('./routes')
const logger = require('./logger').logger
const log = require('./logger').log

const server = new Hapi.Server()
server.connection({ host: serverConfig.host, port: serverConfig.port })

server.route(routes)

server.start(err => {
	if (err) {
		console.error(err);
		server.stop();
	}

	logger.log(`The server has started`, 'success', [`${server.info.host}:${server.info.port}`])
}) 

server.on('request', (request, event, tags) => {
	log(request, event, tags)
})