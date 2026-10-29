// server.js - Updated for clean Nginx subfolder mapping
const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

const prices = { tomato: 180, onion: 120, potato: 90, spinach: 60 };

// This maps to: https://duckdns.org
app.get("/", (req, res) => {
    res.send("NodeAPI (Developed by Haroon Khan) API is running. This is V2. Try /prices\n");
});

// This maps to: https://duckdns.orgf1
app.get("/f1", (req, res) => {
    res.send("Welcome to Feature-1");
});

// This maps to: https://duckdns.orgf2
app.get("/f2", (req, res) => {
    res.send("Welcome to Feature-2");
});

// This maps to: https://duckdns.orgf3
app.get("/f3", (req, res) => {
    res.send("Welcome to Feature-3");
});

// This maps to: https://duckdns.orggh
app.get("/gh", (req, res) => {
    res.send("Github Actions deployed successfully");
});

// This maps to: https://duckdns.orghealth
app.get("/health", (req, res) => {
    res.json({ status: "ok", server: os.hostname(), node: process.version });
});

// This maps to: https://duckdns.orgprices
app.get("/prices", (req, res) => {
    res.json({ currency: "PKR per kg", prices: prices });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`SabziCart API listening on port ${PORT}`);
});
