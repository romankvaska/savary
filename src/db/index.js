const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    database: "dbsaory",
    user: "root",
    password: "12345",
    dateStrings: true
});

function runQuery(db, sqlQuery, params, res) {
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            res.send(err.sqlMessage);
        } else {
            res.send(result);
        }
    })
};

// reurn all records from LookupBudgetItems table
app.get("/budgetitems/get", (req, res) => {
    runQuery(db, "call sp_lookupbudgetitems_sel()", null, res);
});


