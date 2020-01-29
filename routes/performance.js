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
            res.status(500).send("Erreur lors de la création d'une performance");
        } else {
            res.sendStatus(200).json(result);
        }
    });
});

//modification d'une performance
router.put("/:id", (req, res) => {
    const idUrl = req.params.id;
    const formData = req.body;
    connection.query("UPDATE performance SET ? WHERE id = ?", [formData, idUrl], err => {
        if (err) {
            res.status(500).send("Erreur lors de la modification d'une performance");
        } else {
            res.sendStatus(200);
        }
    });
});

//supprimer une performance
router.delete("/:id",
    (req, res) => {
        const idUrl = req.params.id;
        connection.query("DELETE FROM performance WHERE id = ?", [idUrl], err => {
            if (err) {
                res.status(500).send("Erreur lors de la suppression d'une performance");
            } else {
                res.sendStatus(200);
            }
        });
    });

module.exports = router;