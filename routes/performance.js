const express = require("express");
const connection = require("../config");
const router = express.Router({
	mergeParams: true
});

router.get("/", (req, res) => {
	connection.query("SELECT * FROM performance", (err, results) => {
		if (err) {
			res.status(500);
		} else {
			res.json(results);
		}
	});
});

module.exports = router;
