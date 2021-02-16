const http = require('http')
const service = require('restana')()

service.get('/', (req, res) => {
  const shell = require('child_process')
  shell.exec('/root/enable-wifi.sh')
})

http.createServer(service).listen(3333, '0.0.0.0', function () {
  console.log('running')
})
