import express from "express";
import { runCareerAI } from "./career-ai-controller.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareerPilot AI is running");
});

app.post("/run-ai", async (req, res) => {

  const { keyword, location, userProfile } = req.body;

  await runCareerAI(keyword, location, userProfile);

  res.json({
    status: "AI automation started"
  });

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
