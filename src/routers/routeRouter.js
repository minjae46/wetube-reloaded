import express from "express";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

const routeRouter = express.Router();

routeRouter.get("/", home);
routeRouter.route("/join").get(getJoin).post(postJoin);
routeRouter.route("/login").get(getLogin).post(postLogin);
routeRouter.get("/search", search);

export default routeRouter;
