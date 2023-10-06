const fs = require("fs");

const requestHandler = (req, res) => {
  const {url, method} = req;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/messages' method='POST'><input type='text' name='messages'><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/messages" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(data).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("4_debugging/messages.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  // res.setHeader('Content-Type', 'text/html'); // Corrected the header name
  // res.write("<html>");
  // res.write("<head><title>My First Pages</title></head>");
  // res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  // res.write("</html>");
  res.end();
};

module.exports = requestHandler;
