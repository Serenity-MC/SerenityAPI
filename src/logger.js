const JackLogger = require('jack-logger')
const serverConfig = require('./config/server')
const logger = JackLogger.create({
    name: 'SerenityAPI',
    showColor: false
});

function log(request, event, tags) {

    if (tags.error) {
        logger.log(event.data, 'error')
    } else
    if (tags.warning) {
        logger.log(event.data, 'warning')
    } else
    if (tags.info) {
        logger.log(event.data, 'info')
    } else
    if (tags.request && serverConfig.verbose) {
        logger.log(event.data, 'info', [`${request.info.remoteAddress} => ${request.info.host + request.path}`, `Method: ${request.method.toUpperCase()}`])
    }
}

module.exports = { logger, log }