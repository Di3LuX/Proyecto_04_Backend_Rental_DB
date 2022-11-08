const express = require("express");
const app = express();
const db = require('./db.js');
const router = require("./router");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => { res.send('Bienvenidos a Express'); });
app.use(router);

db.then(() => {
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
})
    .catch((err) => console.log(err.message)); 
    //dfafsafasfasf