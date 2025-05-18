import { io } from "../index.js";


export default function socketController(io) {
    io.on("connection", (client) => {
      console.log("New client connected");
  
      client.on("disconnect", () => {
        console.log("Client disconnected");
      });
  
      client.on("message", (payload) => {
        console.log(payload);
        io.emit("message", { ...payload, response: "Message received" });
      });
    });
  }
  