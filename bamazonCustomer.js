var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
})

function start() {
    connection.query('SELECT * FROM products', function(err, res) {
        if(err) throw err;
        console.log("Welcome to Bamazon");

        for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].id + "|" + "Product: " + res[i].product_name + "|" + "Department: " + res[i].department_name + "|")
        }
        console.log(' ');
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the id of the product you are looking for?",
                validate: function(value) {
                    if (isNaN(value) == false && parseInt(value) <= res.length && parseInt (value) > 0) {
                        return true;
                    } else{
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "quantity",
                message: "How much would you like to purchase?",
                validate: function(value) {
                    if(isNaN(value)) {
                        return false;
                    } else{
                        return true;
                    }
                }
            }

        ]).then(function(ans) {
            var whatToBuy = (ans.id) - 1;
            var howMuch = parseInt(ans.quantity);
            var total = parseFloat(((res[whatToBuy].Price)*howMuch).toFixed(2));

            if(res[whatToBuy].StockQuantity >= howMuch) {
                connection.query("UPDATE products SET ? WHERE?", [
                    {StockQuantity: (res[whatToBuy].StockQuantity - howMuch)},
                    {id: ans.id}
                ], function(err, res) {
                    if (err) throw err;
                    console.log("There you go! Your total is $" + total.toFixed(2) + ".Your item(s) will be shipped to you in 2-3 business days.")
                }
            )
        }})
    }
    )}