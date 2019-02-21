const sqlite3 = require('sqlite3');

const database = new sqlite3.Database("./database.db", (err) =>{
  if (err) {
    console.error(err);
  }
})
database.run(`
CREATE TABLE IF NOT EXISTS devices(
  computerId INTEGER PRIMARY KEY  AUTOINCREMENT,
  model TEXT NOT NULL,
  factoryTime TEXT NOT NULL,
  user TEXT,
  serial TEXT,
  system TEXT,
  remark TEXT)`);
database.close();