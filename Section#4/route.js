const fs = require("fs");

const routeHandler = (req, res) => {
  // console.log(req);
  console.log(req.url, req.method, req.headers); // These 3 are the main method that are included while we are  request something
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First</title></head>");
    res.write(
      "<body><h1>Hello</h1><br></br><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("Message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First</title></head>");
  res.write("<body><h1>Hello</h1></body>");
  res.write("</html>");
  res.end();
  // process.exit(); // it will exit otherwise its continuous running
};

module.exports = routeHandler;

// Multiple Export
// module.exports =
// {
//     handle:routeHandler,
//     name:"test"
// }

// module.exports.handler=routeHandler
// module.exports.handler="Test"
