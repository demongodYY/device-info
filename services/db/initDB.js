const sqlite3 = require('sqlite3');
const path = require('path')

const initDB = () => {
  const dbPath = path.resolve(__dirname, 'database.db');  
  const database = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err);
    }
  });
  database.runAsync = (method, sql, values) => {
    return new Promise((resolve, reject) => {
      database[method](sql, values, function (err, row) {           
        return err ? reject(err) : resolve(row || this)
      })
    });
  }
  return database;
}

module.exports = initDB;