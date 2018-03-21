const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();


router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
});
router.post('/users', (ctx, next) => {
    // ...
    ctx.body = 'post users!';
});
router.put('/users/:id', (ctx, next) => {

    // ...
    ctx.body = 'post users ${name}!'  ;
});
router.del('/users/:id', (ctx, next) => {
    // ...
});
router.all('/users/:id', (ctx, next) => {
    // ...
});

app.use(router.routes());
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
