const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const ShowsController = require("../controllers/ShowsController");

//Endpoint para ver todas las peliculas
router.get("/", ShowsController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id", ShowsController.getShowById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", ShowsController.getShowByTitle);

//Endpoint para registrar nueva pelicula
router.post("/", authBearerMiddleware, ShowsController.registerShow);

//Endpoint para borrar una pelicula
router.delete("/:id", authBearerMiddleware, ShowsController.deleteById);

//Endpoint para borrar todas las peliculas
router.delete("/", authBearerMiddleware, ShowsController.deleteAll);

module.exports = router;