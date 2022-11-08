const express = require("express");
const router = express.Router();

const GenreController = require("../controllers/GenreController");

//Endpoint para ver todos los generos
router.get("/", GenreController.getAllGenres);

//Endpoint para registrar un nuevo genero
router.post("/", GenreController.registerGenre);

//Endpoint para borrar un genero mediante su id
router.delete("/:id", GenreController.deleteGenre);

//Endpoint para borrar todos los generos
router.delete("/", auth, GenreController.deleteAll);


module.exports = router;