const API_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";

const allowedStacks = ["frontend"];
const allowedLevels = ["debug", "info", "warn", "error", "fatal"];
const allowedPackages = [
  "api", "component", "hook", "page", "state", "style",
  "auth", "config", "middleware", "utils"
];

function Log(stack, level, packageName, message) {
  if (!allowedStacks.includes(stack) ||
      !allowedLevels.includes(level) ||
      !allowedPackages.includes(packageName)) {
    console.error("Invalid log parameters");
    return;
  }

  fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      stack, level, package: packageName, message
    }),
  })
    .then(res => res.json())
    .then(data => console.log("Log result:", data))
    .catch(err => console.error("Log error:", err));
}

export default Log;
