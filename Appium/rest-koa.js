const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  const shell = require('child_process')
  shell.exec('/root/enable-wifi.sh')
});

app.listen(3333);
