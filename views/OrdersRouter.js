const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")

const OrdersController = require("../controllers/OrdersController");

//Endpoint para registrar un nuevo pedido
router.post("/", authBearerMiddleware, isAdmin, OrdersController.placeNewOrder);

//Endpoint para ver todos los pedidos
router.get("/", authBearerMiddleware, isAdmin, OrdersController.allOrders);

//Endpoint para ver pedidos por idUser
router.get("/usuario/:id", authBearerMiddleware, isAdmin, OrdersController.getOrdersById);

//ENdpoint para borrar un pedido mediante su id
router.delete("/:id", authBearerMiddleware, isAdmin, OrdersController.deleteOrderById);

//Endpoint para borrar todos los pedidos
router.delete("/deleteAll/:id", authBearerMiddleware, isAdmin, OrdersController.deleteAll);


module.exports = router;