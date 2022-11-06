const express = require("express");
const router = express.Router();

const MoviesController = require("../controllers/MoviesController");

//Endpoint para ver todas las peliculas
router.get("/", MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id", MoviesController.getMovieById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", MoviesController.getMovieByTitle);

//Endpoint para registrar nueva pelicula
router.post("/", MoviesController.registerMovie);

//Endpoint para borrar una pelicula
router.delete("/:id", MoviesController.deleteById);

//Endpoint para borrar todas las peliculas
router.delete("/", MoviesController.deleteAll);

module.exports = router;