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

const confettiSchema = z.object({
  x: z.number(),
  y: z.number(),
});

function onConfetti(msg: any) {
  const coords = confettiSchema.parse(msg);

  console.log("Sending confetti", coords);
  io.emit("confetti", coords);
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("confetti", onConfetti);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
