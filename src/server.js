const Hapi = require('hapi')
const HapiAuthBearerSimple = require('hapi-auth-bearer-simple')

const validate = require('./validate')
const serverConfig = require('./config/server')
const routes = require('./routes')
const logger = require('./logger').logger
const log = require('./logger').log

const server = new Hapi.Server()
server.connection({ host: serverConfig.host, port: serverConfig.port })

server.register(HapiAuthBearerSimple)
server.auth.strategy('bearer', 'bearerAuth', { validateFunction: validate })
server.auth.default('bearer')

server.route(routes)

server.start(error => {
	if (error) {
		console.error(error);
		server.stop();
	}

	logger.log(`The server has started`, 'success', [`${server.info.host}:${server.info.port}`])
}) 

server.on('request', (request, event, tags) => {
	log(request, event, tags)
})