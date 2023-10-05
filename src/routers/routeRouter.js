import express from "express";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, login } from "../controllers/userController";

const routeRouter = express.Router();

routeRouter.get("/", home);
routeRouter.route("/join").get(getJoin).post(postJoin);
routeRouter.get("/login", login);
routeRouter.get("/search", search);

export default routeRouter;
