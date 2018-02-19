const exp = require('express');
const site = exp();
const router = exp.Router();
const path = require('path');

const expressVue = require('express-vue');
/** 
 * You should use path for dealing with paths.. 
 * Its a good idea to give the full path to rootPath
*/
const expressVueMiddleware = expressVue.init({
	rootPath: path.resolve(__dirname)
});
site.use(expressVueMiddleware);


router.get('/', function(req, res) {
	/**
	 * if data, or vueOptions are empty you don't need to include them.
	 */
	res.renderVue('main.vue');
});

site.use("/", router);

site.listen(3000, function() {
	console.log('Express server started on port %s', 3000);
});