const http = require("http");
const os = require("os");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "text/html" });
  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFile = path.basename(__filename);
  const html = `
    <ul>
      <li>Username: ${username}</li>
      <li>OS Type: ${osType}</li>
      <li>Uptime (minutes): ${uptime}</li>
      <li>Current Directory: ${currentDir}</li>
      <li>Server File: ${serverFile}</li>
    </ul>
  `;
  res.end(html);
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
