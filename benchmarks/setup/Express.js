const Express = require('express');
const test_server = Express();
const simple_html = require('../tests/simple_html.js');

test_server.get('/benchmark', (request, response) => {
    response.setHeader('content-type', 'text/html; charset=utf-8');
    return response.send(simple_html());
});

module.exports = test_server;