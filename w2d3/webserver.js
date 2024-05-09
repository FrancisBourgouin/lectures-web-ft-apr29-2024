// User said: GET / HTTP/1.1
// Host: localhost:9001
// Connection: keep-alive
// Cache-Control: max-age=0
// sec-ch-ua: "Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
// Sec-Fetch-Site: none
// Sec-Fetch-Mode: navigate
// Sec-Fetch-User: ?1
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate, br, zstd
// Accept-Language: fr-CA,fr;q=0.9,en-CA;q=0.8,en;q=0.7,fr-FR;q=0.6,en-US;q=0.5,la;q=0.4

const http = require("http")

const user1 = {
  name:"Bob",
  lastName:"Bobbbbb",
  age:42,
  isHappy:true
}

const user2 = {
  name:"Robert",
  lastName:"ROBBBBBBBBBERT",
  age:42,
  isHappy:false
}


// Status Codes

// 20x - OK (201 created)
// 30x - Redirect
// 40x - You fudged up (client)
// 50x - Server fudged up

const server = http.createServer((req, res) => {
  let statusCode = 418
  let convertedObject = ""
  
  if(req.url === "/users/1"){
    statusCode = 200
    convertedObject = JSON.stringify(user1)
  }
  
  if(req.url === "/users/2"){
    statusCode = 200
    convertedObject = JSON.stringify(user2)
  }

  if(statusCode === 418){
    convertedObject = `
    (  )   (   )  )
  ) (   )  (  (
  ( )  (    ) )
  _____________
 <_____________> ___
 |             |/ _ \
 |               | | |
 |               |_| |
___|             |\___/
/    \___________/    \
\_____________________/
    `
  }
  
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(convertedObject)
})


server.listen(9001)