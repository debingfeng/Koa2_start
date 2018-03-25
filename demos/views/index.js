const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './public/views'), {
    extension: 'ejs'
}));


