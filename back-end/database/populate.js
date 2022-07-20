const {
  populateProductsTable,
  populateClientsTable,
  populateEmployeesTable,
  populateSalesTable,
} = require("./helpers/populateTables");

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

const tablesPopulate = [
  populateProductsTable,
  populateClientsTable,
  populateEmployeesTable,
  populateSalesTable,
];

tablesPopulate.forEach((query) => {
  database.run(query, (err) =>
    errorFunction(err, "Table populated successfully")
  );
});

database.close((err) => errorFunction(err, "Database Closed Successfully"));
