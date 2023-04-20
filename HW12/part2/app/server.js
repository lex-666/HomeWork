const http = require("http");
const personalModule = require("./personalmodule");

const server = http.createServer((req, res) => {
  const username = "Art";
  const greeting = personalModule.greetUser(username);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  const currentDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentDate);
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`Date of request: ${formattedDate}\n`);
  res.write(`Current day: ${currentDay}\n`);
  res.write(`Current timezone: ${currentTimezone}\n`);
  res.write(`${greeting}`);
  res.end();
});

server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
