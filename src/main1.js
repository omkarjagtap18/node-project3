import { createConnection } from "mysql";
import bluebird from "bluebird";

async function readMessage() {
  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "Thermalenn@18",
    database: "js",
  };

  let connection = createConnection(connectionUri);

  bluebird.promisifyAll(connection);

  await connection.connectAsync();

  let sql = `select * from message`;
  //   connection.query(sql, (error, results) => {});
  let results = await connection.queryAsync(sql);

  console.log("hello", results.length);
  connection.end();

  return results;
}

async function main() {
  let results = await readMessage();
  console.log(results);
}
main();
