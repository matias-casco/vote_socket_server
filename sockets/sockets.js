import { Options } from "../models/options.js";
import { Option } from "../models/option.js";

const options = new Options();

options.addOption(new  Option('Metalica') );
options.addOption(new  Option('Queen') );
options.addOption(new  Option('Bon Jovi') );
options.addOption(new  Option('Green Day') );

export default function socketController(io) {
  io.on("connection", (client) => {
    console.log("New client connected");

    client.emit("active-options", options.getOptions());

    client.on("add-option", (payload) => {
      options.addOption(new Option(payload.name));
      io.emit("active-options", options.getOptions());
    });

    client.on("vote-option", (payload) => {
      options.voteOption(payload.id);
      io.emit("active-options", options.getOptions());
    });

    client.on("delete-option", (payload) => {
      options.deleteOption(payload.id);
      io.emit("active-options", options.getOptions());
    });

    client.on("disconnect", () => {
      console.log("Client disconnected");
    });

    client.on("message", (payload) => {
      console.log(payload);
      io.emit("message", { ...payload, response: "Message received" });
    });

    client.on("flutter", (payload) => {
      console.log(payload);
      io.emit("message", {
        ...payload,
        response: "Message received from flutter",
      });
    });
  });
}
