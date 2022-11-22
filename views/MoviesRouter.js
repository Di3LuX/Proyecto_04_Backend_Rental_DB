const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")

const MoviesController = require("../controllers/MoviesController");

//Endpoint para ver todas las peliculas
router.get("/", MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id", authBearerMiddleware, MoviesController.getMovieById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", authBearerMiddleware, MoviesController.getMovieByTitle);

//Endpoint para registrar nueva pelicula
router.post("/", authBearerMiddleware, isAdmin, MoviesController.registerMovie);

//Endpoint para borrar una pelicula
router.delete("/:id", authBearerMiddleware, isAdmin, MoviesController.deleteById);

//Endpoint para borrar todas las peliculas
router.delete("/", authBearerMiddleware, isAdmin, MoviesController.deleteAll);

module.exports = router;