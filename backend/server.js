const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// AI endpoint
app.post("/run-ai", (req, res) => {

  const { role, location, profile } = req.body;

  const result = `
AI Automation Started

Role: ${role}
Location: ${location}

Next Steps:
✔ Searching jobs
✔ Resume optimization
✔ LinkedIn optimization
✔ Recruiter email generation
`;

  res.send(result);

});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
