import express, { response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Server } from "socket.io";
import dotenv from "dotenv";
import http from "http";
import socketController from "./sockets/sockets.js";



//dotenv config
dotenv.config();

//express app
const app = express();

//node server
const server = http.createServer(app);
export const io = new Server(server);
socketController(io);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//Path público
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log("Server is running on port " + process.env.PORT);
});


