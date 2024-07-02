const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  console.log('Hi this is venkatareddy');


  let title = '';
  let message = '';

  if (req.url === '/home') {
    title = 'Home';
    message = 'Welcome home';
  } else if (req.url === '/about') {
    title = 'About Us';
    message = 'Welcome to About Us page';
  } else if (req.url === '/node') {
    title = 'Node Js Project';
    message = 'Welcome to my Node Js project';
  } else {
    title = '404 Not Found';
    message = 'Page not found';
    res.writeHead(404, { 'Content-Type': 'text/html' });
  }

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${message}</h1>
    </body>
    </html>
  `);
  
});


const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
