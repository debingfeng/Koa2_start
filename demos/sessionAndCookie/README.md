## Cookie的使用直接在上下文中获取


```javascript
const test = async (ctx) => {
  ctx.cookies.get(name, [options]); //读取上下文请求中的cookie
  ctx.cookies.set(name, value, [options]); //在上下文中写入cookie
}


```



### 使用[]EJS](https://ejs.bootcss.com/)模板引擎

```

npm install ejs

```
