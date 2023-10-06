const http = require("http");
const route = require("../3_nodejsBasics/routes")

const server = http.createServer(route);

server.listen(3030);