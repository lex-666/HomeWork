const username = document.querySelector("#username");
const osType = document.querySelector("#os-type");
const uptime = document.querySelector("#uptime");
const currentDir = document.querySelector("#current-dir");
const serverFile = document.querySelector("#server-file");

fetch("http://localhost:5000")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const lis = html.querySelectorAll("li");
    username.textContent = lis[0].textContent.split(": ")[1];
    osType.textContent = lis[1].textContent.split(": ")[1];
    uptime.textContent = lis[2].textContent.split(": ")[1];
    currentDir.textContent = lis[3].textContent.split(": ")[1];
    serverFile.textContent = lis[4].textContent.split(": ")[1];
  });
