const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  console.log('End session, enable wi-fi, disable flight-mode icon');
  const shell = require('child_process')
  shell.exec('./enable-wifi.sh')
});

app.listen(33333);
