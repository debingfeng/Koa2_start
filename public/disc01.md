## 安装nvm

- nvm ls-remote

- nvm ls

- nvm install v8.10.0

- nvm use v8.10.0

- nvm current

## 安装Koa

```
// 设置淘宝镜像

npm config set registry https://registry.npm.taobao.org

npm install koa pm2 nodemon

```

## 使用koa-router

// 参考上下文ctx：https://koa.bootcss.com/#request

// https://www.npmjs.com/package/koa-router


- 正常基本用法

```javascript

var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();
 
router.get('/', (ctx, next) => {
  // ctx.router available
  //接收参数
  let params = ctx.request.params;
  // 接收查询参数
  let query = ctx.request.query;
  
  
  next();
  
});
 
app.use(router.routes())
     .use(router.allowedMethods());
  
```

- 常用的请求方法

```javascript
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
    
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  // 接收所有请求方法
  .all('/users/:id', (ctx, next) => {
    // ...
  });
```
- 命名路由

```javascript
router.get('user', '/users/:id', (ctx, next) => {
 // ...
});
 
router.url('user', 3);
// => "/users/3"
```

