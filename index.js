const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');

app.use(serve('.'));

// $ GET /hello.txt
app.use(serve('test/fixtures'));

// or use absolute paths
app.use(serve(__dirname + '/test/fixtures'));

router.get('/', (ctx, next) => {
    let params = ctx.params;

    // 从上下文中直接获取
    let ctx_query = ctx.query;

    ctx.body = 'Hello World!' + JSON.stringify(ctx_query);
});
router.post('/users', (ctx, next) => {
    // ...
    ctx.body = {a:"a"};
});
router.put('/users/:id', (ctx, next) => {
    let id = ctx.params.id;
    // ...
    ctx.body = 'post users ' + id;
});
router.del('/users/:id', (ctx, next) => {
    // ...
});
router.all('/users/:id', (ctx, next) => {
    // ...
});



app .use(router.routes())
    .use(router.allowedMethods());



app.listen(3000);
console.log('[demo] start-quick is starting at port 3000')
