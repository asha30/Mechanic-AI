// import express from "express" ;
// import {config} from "dotenv";
// import morgan from 'morgan';
// import appRouter from "./routes/index.js";
// import cookieParser from "cookie-parser";
// config();
// const app = express();
// app.use(express.json());//middlewares
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(morgan("dev"));
// app.use("/api/v1",appRouter);
// export default app;
import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import appRouter from './routes/index.js';
config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan('dev'));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map