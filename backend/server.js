const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Root route (open dashboard)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// AI automation endpoint
app.post("/run-ai", async (req, res) => {

  const { role, location, profile } = req.body;

  console.log("AI request received:", role, location);

  // For now we return a demo response
  const result = `
AI Automation Started

Role: ${role}
Location: ${location}

Next steps:
✔ Searching jobs
✔ Generating resume
✔ Writing cover letter
✔ Preparing recruiter email
`;

  res.send(result);
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
