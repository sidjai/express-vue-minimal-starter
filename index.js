const exp = require('express');
const site = exp();
const router = exp.Router();
const path = require('path');

const expressVue = require('express-vue');
const expressVueMiddleware = expressVue.init();
site.use(expressVueMiddleware);


router.get('/', function(req, res) {
	res.renderVue('main.vue');
});

site.use("/", router);

site.listen(3000, function() {
	console.log('Express server started on port %s', 3000);
});
