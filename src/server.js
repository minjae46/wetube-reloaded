import express from "express";
import morgan from "morgan";
import routeRouter from "./routers/routeRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//form의 value를 자바스크립트 object 형식으로 변환해주어 express app이 form 데이터를 다룰 수 있게 해주는 메서드.

app.use("/", routeRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
