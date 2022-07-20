const {
  createProductsTable,
  createClientsTable,
  createEmployeesTable,
  createSalesTable,
} = require("./helpers/createTables");

const sqlite3 = require("sqlite3").verbose();

const errorFunction = (error, message) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(message);
};

const database = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE,
  (err) => errorFunction(err, "Connected Successfully")
);

const tablesCreate = [
  createProductsTable,
  createClientsTable,
  createEmployeesTable,
  createSalesTable,
];

tablesCreate.forEach((query, i) => {
  database.run(query, (err) =>
    errorFunction(err, "Table created successfully")
  );
});

database.close((err) => errorFunction(err, "Database Closed Successfully"));
