import express from "express";
import { runCareerAI } from "./career-ai-controller.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareerPilot AI Backend Running");
});

app.get("/run-ai", async (req, res) => {

  const userProfile = `
MBA Graduate
Skills: Excel, Power BI, Financial Analysis, SQL
Experience: Financial reporting internship
`;

  await runCareerAI("Business Analyst", "India", userProfile);

  res.send("AI Job Automation Started");

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
