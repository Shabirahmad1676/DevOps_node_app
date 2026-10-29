// server.js - the SabziCart price API (Node.js + Express)
const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;
const prices = { tomato: 180, onion: 120, potato: 90, spinach: 60 };
app.get("/", (req, res) => {
    res.send("NodeAPI (Developed by Haroon Khan) API is running. This is V2. Try /api/prices\n");
});
app.get("/api/f1", (req, res) => {
    res.send("Welcome to Feature-1");
});

app.get("/api/f2", (req, res) => {
    res.send("Welcome to Feature-2");
});

app.get("/api/f3", (req, res) => {
    res.send("Welcome to Feature-3");
});


app.get("/api/gh", (req, res) => {
res.send("Github Actions deployed successfully");
});
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", server: os.hostname(), node: process.version });
});
app.get("/api/prices", (req, res) => {
    res.json({ currency: "PKR per kg", prices: prices });
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`SabziCart API listening on 127.0.0.1:${PORT}`);
});
