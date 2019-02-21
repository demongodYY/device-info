const initDB = require('./db/initDB');

function DeviceServices() {
  this.queryDevicesList = async () => {
    const database = initDB();
    const sql = 'SELECT computerId FROM devices';
    const result = await database.runAsync('all', sql, []);
    database.close();
    return result;
  }

  this.queryDeviceDetail = async (values) => {
    const database = initDB();
    const sql = `
      SELECT *
      FROM devices
      WHERE computerId = ?`;
    const result = await database.runAsync('get', sql, values);
    database.close();
    return result;
  }

  this.insertDevice = async (values) => {
    const database = initDB();
    const sql = 'INSERT INTO devices(model, factoryTime, user, serial, system, remark) VALUES(?,?,?,?,?,?)';
    const result = await database.runAsync('run', sql, values);
    database.close();
    return result;
  }
}
module.exports = DeviceServices;
