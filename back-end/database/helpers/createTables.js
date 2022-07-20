const createProductsTable = `
CREATE TABLE IF NOT EXISTS Products (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	price REAL NOT NULL,
	quantity_available INTEGER NOT NULL
);
`;

const createClientsTable = `
CREATE TABLE IF NOT EXISTS Clients (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	cellphone INTEGER(11) NOT NULL
);
`;

const createEmployeesTable = `
CREATE TABLE IF NOT EXISTS Employees (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	cellphone INTEGER(11) NOT NULL,
	salary REAL NOT NULL
);
`;

const createSalesTable = `
CREATE TABLE IF NOT EXISTS Sales (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	product_id INTEGER NOT NULL,
	employee_id INTEGER NOT NULL,
	quantity INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);
`;

module.exports = {
  createProductsTable,
  createClientsTable,
  createEmployeesTable,
  createSalesTable,
};
