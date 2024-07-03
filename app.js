const http = require('http');

const funchandler=require('./routes');

// Create the server
const server = http.createServer(funchandler);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
