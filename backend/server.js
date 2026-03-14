const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.post("/run-ai", (req, res) => {

  const role = req.body.role;
  const location = req.body.location;

  const result =
  "AI Automation Started\n\n" +
  "Role: " + role + "\n" +
  "Location: " + location + "\n\n" +
  "Next Steps:\n" +
  "✓ Searching jobs\n" +
  "✓ Resume optimization\n" +
  "✓ LinkedIn optimization\n" +
  "✓ Recruiter email generation";

  res.send(result);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
