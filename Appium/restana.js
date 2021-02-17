const service = require('restana')({})

service.get('/', (req, res) => {
  const shell = require('child_process')
  shell.exec('/root/enable-wifi.sh')
  res.send('Success!')
})
service.start(3333)
