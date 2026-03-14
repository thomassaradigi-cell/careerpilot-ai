const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// AI endpoint
app.post("/run-ai", async (req, res) => {

  const { role, location, profile } = req.body;

  console.log("Request received:", role, location);

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

// IMPORTANT: listen on Railway PORT
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
