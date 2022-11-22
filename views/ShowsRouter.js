const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")

const ShowsController = require("../controllers/ShowsController");

//Endpoint para ver todas las peliculas
router.get("/", ShowsController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id", authBearerMiddleware, ShowsController.getShowById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", authBearerMiddleware, ShowsController.getShowByTitle);

//Endpoint para registrar nueva pelicula
router.post("/", authBearerMiddleware, isAdmin, ShowsController.registerShow);

//Endpoint para borrar una pelicula
router.delete("/:id", authBearerMiddleware, isAdmin, ShowsController.deleteById);

//Endpoint para borrar todas las peliculas
router.delete("/", authBearerMiddleware, isAdmin, ShowsController.deleteAll);

module.exports = router;