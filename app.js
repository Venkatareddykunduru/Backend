const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  console.log('Hi this is venkatareddy'); 
  
});


const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
