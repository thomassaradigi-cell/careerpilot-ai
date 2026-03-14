const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT: Railway requires this
const PORT = process.env.PORT;

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Test route
app.get("/test", (req, res) => {
  res.send("CareerPilot AI backend is running!");
});

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// AI endpoint
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

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
