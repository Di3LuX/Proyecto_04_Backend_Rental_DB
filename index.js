const express = require("express");
const app = express();

const db = require('./db.js');

const PORT = process.env.PORT || 3500;

const router = require("./router");

app.use(express.json());

app.use(router);

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`));
})
.catch((err)=> console.log(err.message)); 