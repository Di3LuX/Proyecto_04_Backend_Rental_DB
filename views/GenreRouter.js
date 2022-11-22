const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")


const GenreController = require("../controllers/GenreController");

//Endpoint para ver todos los generos
router.get("/", GenreController.getAll);

//Endpoint para registrar un nuevo genero
router.post("/", authBearerMiddleware, isAdmin, GenreController.registerGenre);

//Endpoint para borrar un genero mediante su id
router.delete("/:id", authBearerMiddleware, isAdmin, GenreController.deleteGenre);

//Endpoint para borrar todos los generos
router.delete("/", authBearerMiddleware, isAdmin, GenreController.deleteAll);


module.exports = router;