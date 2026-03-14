const fs = require("fs");
const path = require("path");

const ee3    = fs.readFileSync(path.join(__dirname, "node_modules/eventemitter3/dist/eventemitter3.umd.js"), "utf8");
const lk     = fs.readFileSync(path.join(__dirname, "node_modules/livekit-client/dist/livekit-client.umd.js"), "utf8").split("\n")[0];
const retell = fs.readFileSync(path.join(__dirname, "node_modules/retell-client-js-sdk/dist/index.umd.js"), "utf8");
const shim   = "window.eventemitter3={EventEmitter:window.EventEmitter3};window.livekitClient=window.LivekitClient;";

fs.writeFileSync(
  path.join(__dirname, "public/retell-bundle.js"),
  ee3 + "\n" + lk + "\n" + shim + "\n" + retell
);

console.log("✅ retell-bundle.js created!");
