DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price INTEGER (100) NOT NULL,
    stock_quantity INTEGER (100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jack_herer", "vapes", 40, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cali_o", "vapes", 44, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gelato", "vapes", 40, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cypress_og", "flower", 45, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ego_loss", "flower", 60, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rollins", "flower", 55, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kiva_dark_choco", "edibles", 25, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kiva_milk_choco", "edibles", 25, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NF1", "concentrates", 22, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("banana_punch", "concentrates", 22, 30)