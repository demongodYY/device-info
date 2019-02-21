const express = require('express');
const AV = require('leanengine');
const next = require('next');
const DeviceServices = require('./services/device-services');
const bodyParser = require('body-parser');
const deviceServices = new DeviceServices();

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();
const jsonParser = bodyParser.json();

AV.init({
  appId: process.env.LEANCLOUD_APP_ID ,
  appKey: process.env.LEANCLOUD_APP_KEY ,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

app.prepare()
  .then(() => {
    const server = express();
    server.use(AV.express());

    server.get('/:id/device', (req, res) => {
      const actualPage = '/device';
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/', (req, res) => {
      app.render(req, res, '/');
    })

    server.get('/api/devices/list', (req, res) => {
      deviceServices.queryDevicesList().then((result) => {
        res.json(result);
      });
    })

    server.get('/api/device/:id/detail', (req, res) => {
      deviceServices.queryDeviceDetail([req.params.id]).then((result) => {
        res.json(result);
      })
    })

    server.post('/api/device/add', jsonParser, (req, res) => {
      const {
        model,
        factoryTime,
        user,
        serial,
        system,
        remark
      } = req.body;
      deviceServices.insertDevice([model, factoryTime, user, serial, system, remark]).then((result) => {        
        res.json({
          statu: 'success',
          insertId: result.lastID
        });
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  })