module.exports = {
    method: 'GET',
    path: '/ping',
    config: {
        description: 'Replies with "Pong!"',
        notes: [],
        tags: [],
        auth: false
    },
    handler: (request, reply) => {
        request.log(['ping', 'pong', 'request'], 'Pong!')
        reply('Pong!')
    }
}