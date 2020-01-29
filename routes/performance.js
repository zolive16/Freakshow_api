const express = require("express");
const connection = require("../config");
const router = express.Router({
    mergeParams: true
});

//toutes les performances
router.get("/", (req, res) => {
    connection.query("SELECT * FROM performance", (err, results) => {
        if (err) {
            res.status(500);
        } else {
            res.json(results);
        }
    });
});

//création d'une nouvelle performance
router.post("/new", (req, res) => {
    const formData = req.body;
    connection.query("INSERT INTO performance SET ?", formData, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.sendStatus(200).json(result);
        }
    });
});

module.exports = router;