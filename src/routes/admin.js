const Router = require('koa-router');
const route = new Router();
var bodyParser = require('koa-bodyparser');

const YoutAppMiddlewares = require('./../middlewares/yout_app');

const SESSION_DEMO = { shop: 'abc-store.shopify.com.vn' };

route.get('/yout-app', async (ctx) => {
    const { shop } = ctx.session || SESSION_DEMO;
    const res = await YoutAppMiddlewares.find(shop);
    ctx.body = res;
});

route.post('/yout-app', bodyParser(), async (ctx) => {
    const { shop } = ctx.session || SESSION_DEMO;
    const { field, data_stringify } = ctx.request.body;
    const res = await YoutAppMiddlewares.update(shop, field, data_stringify);
    ctx.body = res;
});

module.exports = route;
