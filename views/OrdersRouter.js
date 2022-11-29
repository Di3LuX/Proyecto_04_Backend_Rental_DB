const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const OrdersController = require("../controllers/OrdersController");

//Endpoint para registrar un nuevo pedido
router.post("/", authBearerMiddleware, OrdersController.placeNewOrder);

//Endpoint para ver todos los pedidos
router.get("/", authBearerMiddleware, OrdersController.allOrders);

//Endpoint para ver pedidos por idUser
router.get("/usuario/:id", authBearerMiddleware, OrdersController.getOrdersById);

//ENdpoint para borrar un pedido mediante su id
router.delete("/:id", authBearerMiddleware, OrdersController.deleteOrderById);

//Endpoint para borrar todos los pedidos
router.delete("/deleteAll/:id", authBearerMiddleware, OrdersController.deleteAll);


module.exports = router;