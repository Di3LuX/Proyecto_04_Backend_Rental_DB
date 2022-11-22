const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")


const UserController = require("../controllers/UserController");


//Ver todos los usuarios
router.get("/", authBearerMiddleware, isAdmin, UserController.getUsers);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, isAdmin, UserController.getUserId);

//Buscar usuario por Email
router.get("/email/:email", authBearerMiddleware, isAdmin, UserController.getUserEmail);

//Registro Usuarios
router.post("/", UserController.registerUser);

//Login Usuarios
router.post("/login", UserController.loginUser);

//Modificar Password
router.put("/newpassword", authBearerMiddleware, isAdmin, UserController.updatePassword);

//Borrar usuarios
router.delete("/", authBearerMiddleware, isAdmin,  UserController.deleteAll);

//Borrar usuario mediante su id
router.delete("/delete/:id",authBearerMiddleware, isAdmin, UserController.deleteById);

//Actualiza datos de usuarios en la DB
router.put('/:id', authBearerMiddleware, isAdmin, UserController.updateProfile);

module.exports = router;