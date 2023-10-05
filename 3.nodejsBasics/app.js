const http = require("http");
const route = require("./First/routes")

const server = http.createServer(route);

server.listen(3030);