const exp = require('express');
const site = exp();
var server = require('http').createServer(site);

const expressVue = require('express-vue');
const expressVueMiddleware = expressVue.init({
	rootPath: './',
	vueVersion: '2.3.4'
});
site.use(expressVueMiddleware);

const router = require('express').Router();

router.get('/', function(req, res) {
	res.renderVue('main.vue', {}, {});
});

site.use("/", router);

server.listen('localhost', 1337);
server.on('listening', function () {
	console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
