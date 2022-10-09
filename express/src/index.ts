import express from "express";
import * as http from "http";
import * as socketio from "socket.io";
import { z } from "zod";

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

const io = new socketio.Server(server, { cors: { origin: "*" } });

const schema = z.object({
  x: z.number(),
  y: z.number(),
  component: z.string(),
});

function onMessage(msg: any) {
  const message = schema.parse(msg);

  console.log("Sending message", message);
  io.emit("message", message);
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", onMessage);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
