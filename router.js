const router = require("express").Router();

const UserRouter = require ("./views/UserRouter");
const MoviesRouter = require("./views/MoviesRouter");
const ShowsRouter = require("./views/ShowsRouter");
const GenreRouter = require("./views/GenreRouter");
const OrdersRouter = require("./views/OrdersRouter");

router.use("/users", UserRouter);
router.use("/movies", MoviesRouter);
router.use("/shows", ShowsRouter);
router.use("/genres", GenreRouter);
router.use("/orders", OrdersRouter);

module.exports = router;