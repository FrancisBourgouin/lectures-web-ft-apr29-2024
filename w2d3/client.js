const net = require("net");
const readline = require("readline")

const rl = readline.createInterface({
  input:process.stdin,
  outout:process.stdout
})

const client = net.createConnection({ encoding: "utf-8", host: "localhost", port: 9001 });

// client.write("Hello!");

client.on("data", data => console.log(`Server said: ${data}`))

// setInterval(() => {
//   client.write("🐔🐔🐔🐔🐔");
// }, 500)

rl.on("line", (line) => {
  client.write(line)
})