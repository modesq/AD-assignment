"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { response, query } = require("express");
const { parse } = require("dotenv");
const axios = require("axios");
const mysql = require('mysql');

const server = express();

server.use(cors()); //make my server open for any request
server.use(express.json());

//IP : http://localhost:PORT
const PORT = process.env.PORT || 3002;

//create connection
const db = mysql.createConnection({
    host: "172.30.118.31", //change this IP to "localhost" to make it run on windows, i used this IP because im using windows subsystem for linux
    user: "admin",
    password: "your_password",
    database: "pharmacy",
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log('error', err.message, err.stack)
    } else {
        console.log("Connected to database!")
    }
});

server.get("/", homeHandler);
server.get("/test", testHandler);
server.get("/productstable", getProductsTable);
server.get("/branchestable", getBranchesTable);
server.get("/products", getproducts);
server.get('/questions', getQuestionnsTable);
server.get("/admin", getAdmin);
server.get("*", defualtHandler);


// let allBranches;
// let allProducts;


// http://localhost:3001/
function homeHandler(req, res) {
    res.send("Hi from the home route");
}

// http://localhost:3001/test
function testHandler(req, res) {
    res.status(200).send("You are requesting the test route");
}

function dbHandler() {
    let sql = "CREATE DATABASE pharmacy";
    console.log("handler");
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error', err.message, err.stack)
        };
        // console.log(result);
        res.send("database created...")
    });
}

function createBranchesTableHandler() {
    let sql = "CREATE TABLE branches(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)";
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error', err.message, err.stack)
        }
        // console.log(result);
        res.send("Branches table created...")
    });
}

function createProductsTableHandler() {
    let sql = "CREATE TABLE products(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, description VARCHAR(255))";
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error', err.message, err.stack)
        }
        // console.log(result);
        res.send("Products table created...")
    });
}

function createUsersTableHandler() {
    let sql = "CREATE TABLE users(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)";
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error', err.message, err.stack)
        }
        // console.log(result);
        res.send("Users table created...")
    });
}

function createQuestionnsTableHandler() {
    let sql = "CREATE TABLE questions(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, phoneNumber VARCHAR(10) NOT NULL, question TEXT NOT NULL)";
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error', err.message, err.stack)
        }
        // console.log(result);
        res.send("Questions table created...")
    });
}

function seedProducts() {
    const data = require("./products.json");
    console.log(data);
    for (let key in data) {
        const { name, description } = data[key];
        const query = `INSERT INTO products (name, description) VALUES ('${name}', '${description}')`;
        db.query(query, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Successfully seeded ${name} into the database`);
            }
        });
    }
    res.send("Data seeded...")
}

function seedBranches() {
    const branches = ["AlKarakBranch", "AmmanBranch", "AqabaBranch", "IrbidBranch", "MaanBranch", "ZarqaBranch"];
    branches.forEach(branch => {
        const name = branch;
        const query = `INSERT INTO branches (name) VALUES ('${name}')`;
        db.query(query, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Successfully seeded ${name} into the database`);
            }
        });
    });
}

function seedQuestions() {
    const data = require("./questions.json");
    console.log(data);
    for (let key in data) {
        const { name, phoneNumber, question } = data[key];
        const query = `INSERT INTO questions (name, phoneNumber, question) VALUES ('${name}', '${phoneNumber}', '${question}')`;
        db.query(query, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Successfully seeded ${name} into the database`);
            }
        });
    }
    res.send("Data seeded...")
}

function seedAdmin() {
    const query = `INSERT INTO users (username, password) VALUES ('admin', 'admin')`;
    db.query(query, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully seeded admin into the database`);
        }
    });
}

// http://localhost:3001/getproductstable
function getProductsTable(req, res) {
    let sql =
        `SELECT branches.name as branch_name, products.id as product_id ,products.name as product_name, products.description as product_description
        FROM branch_product
        INNER JOIN branches ON branches.id = branch_product.branch_id
        INNER JOIN products ON products.id = branch_product.product_id`
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
            // allProducts = results;
            // console.log(allProducts)
            // res.send(results);
            return (results);
        }
    });
}

// http://localhost:3001/getbranchestable
function getBranchesTable(req, res) {
    let sql = "SELECT * FROM branches"
    return db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
            // allBranches = results;
            // res.send(results);
            return (results);
        }
    });
}

// http://localhost:3001/questions
function getQuestionnsTable(req, res) {
    let sql = "SELECT * FROM questions"
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(results);
            res.send(results);
        }
    });
}

// http://localhost:3001/admin
function getAdmin(req, res) {
    let sql = "SELECT * FROM users"
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(results);
            res.send(results);
        }
    });
}


// class Product {
//     constructor(name, description) {
//         this.name = name;
//         this.description = description;
//     }
// }

class Branch {
    constructor(name, img, products) {
        this.name = name;
        this.img = img;
        this.products = products;
    }
}

// http://localhost:3001/products
function getproducts(req, res) {
    let allProducts = getProductsTable(req, res);
    let allBranches = getBranchesTable(req, res);

    console.log(allBranches)
    // console.log(allProducts)

    // allBranches.data.foreach((branch) => {
    //     let products = []
    //     new Branch(branch.name, null, products.push((product) => products.find((product) => {
    //         return product.name === product.branch_name
    //     })));
    // })

    // console.log(allBranches)
}

// http://localhost:3001/*
function defualtHandler(req, res) {
    res.status(404).send("Sorry, Page not found");
}

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});