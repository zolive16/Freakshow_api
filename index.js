const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const bodyParser = require("body-parser");
const api = require("./routes");
const PORT = process.env.DATA_PORT || 8000;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
	next();
});

app.use("/api", api);

app.listen(PORT, (err) => {
	if (err) {
		throw new Error(`Quelque chose ne se passe pas bien ! ${err}`);
	}
	console.log(`Le serveur est lancé sur le port ${PORT}`);
});
