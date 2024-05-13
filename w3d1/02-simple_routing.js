// HTTP Server w/ Routing

const http = require("http");

const user1 = {
  id: 1,
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  id: 2,
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  1: user1,
  2: user2,
};

const server = http.createServer((req, res) => {
  const url = req.url
  const userId = url.split("/")[2] // /users/1 => ["","users","1"] => "1"

  // if(url === "/")
  // if(url === "/users/1"){
  //   const convertedDataToText = JSON.stringify(users[1])
  //   return res.end(convertedDataToText)
  // }
  
    const convertedDataToText = JSON.stringify(users[userId])
    return res.end(convertedDataToText)
  
});

server.listen(3000);
