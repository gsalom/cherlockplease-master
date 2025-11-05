const mysql = require('mysql2/promise');

async function runQuery() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'test'
    });

    const sql = 'UPDATE clients SET nom = "Anna" WHERE id = 1';
    const [result] = await connection.execute(sql);

    console.log('Files afectades:', result.affectedRows);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (connection) await connection.end();
  }
}

runQuery();