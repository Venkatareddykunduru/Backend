const fs = require('fs');
const handler=(req,res)=>{
    console.log('Hi this is venkatareddy');
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    // Read existing messages from the file
    fs.readFile('messages.txt', (err, data) => {
      if (err) {
        data = ''; // If the file doesn't exist or is empty
      }
      // Convert buffer to string and split by newline, then filter out empty strings
      const messages = data.toString().split('\n').filter(Boolean);

      // Generate HTML with messages at the top of the form
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body>');
      res.write('<h1>Messages:</h1>');
      res.write('<ul>');
      messages.forEach(message => {
        res.write(`<li>${message}</li>`);
      });
      res.write('</ul>');
      res.write(
        '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
      );
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // Append the new message to the file
      fs.appendFile('messages.txt', message + '\n', err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}
module.exports=handler;