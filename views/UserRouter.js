const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")


const AuthController = require("../controllers/AuthController");


//Ver todos los usuarios
router.get("/", authBearerMiddleware, isAdmin, AuthController.getUsers);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, isAdmin, AuthController.getUserId);

//Buscar usuario por Email
router.get("/email/:email", authBearerMiddleware, isAdmin, AuthController.getUserEmail);

//Registro Usuarios
router.post("/", AuthController.registerUser);

//Login Usuarios
router.post("/login", AuthController.loginUser);

//Modificar Password
router.put("/newpassword", authBearerMiddleware, isAdmin, AuthController.updatePassword);

//Borrar usuarios
router.delete("/", authBearerMiddleware, isAdmin,  AuthController.deleteAll);

//Borrar usuario mediante su id
router.delete("/delete/:id",authBearerMiddleware, isAdmin, AuthController.deleteById);

//Actualiza datos de usuarios en la DB
router.put('/:id', authBearerMiddleware, isAdmin, AuthController.updateProfile);

module.exports = router;