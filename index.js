const express = require('express');
const router = require('./router.js');
const db = require('./db.js');
const morgan = require('morgan');
const logger = require('./config/winston');
const cors = require("cors");
const colors = require('colors');

const app = express();
const PORT = process.env.PORT || 3000;

let corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204
};

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(router);

db.then(() => {

	app.listen(PORT, () => console.log(`Servidor en el puerto: ${PORT}. Espero que tengas un buen dia!`.rainbow));
})
	.catch((err) => console.log(err.message));   