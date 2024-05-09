const net = require("net")

const listOfClients = []

const waiterGuide = (client) => {
  // Client / Server config
  client.setEncoding("utf-8")
  listOfClients.push(client)


  // Helper definitions
  const message = "🤖: Welcome to Costco (The restaurant part)\n"
  const parrotBack = message => client.write(`🦜: ${message}`)
  const broadcast = message => {
    for(const someClient of listOfClients){
      if(someClient !== client){
        someClient.write(`📣: ${message}`)
      }
    }
  }
  const logMessage = message => console.log(`User said: ${message}`)

  // Server actions
  console.log("New client connected!")
  console.log(`There is currently ${listOfClients.length} client connected`)
  client.write(message)

  client.on("data", logMessage) // Accepts a callback, because client.on is a HOF
  // client.on("data", parrotBack)
  client.on("data", broadcast) // Accepts a callback, because client.on is a HOF
}

const server = net.createServer(waiterGuide)

server.listen(9001)

