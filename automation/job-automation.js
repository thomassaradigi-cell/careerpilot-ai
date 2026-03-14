import { runCareerAI } from "../backend/career-ai-controller.js";

const userProfile = `
MBA Graduate
Skills: Excel, Power BI, Financial Analysis, SQL
Experience: Internship in Financial Reporting
`;

const keyword = "Business Analyst";
const location = "India";

async function startAutomation() {

  console.log("Starting Career AI Automation");

  await runCareerAI(keyword, location, userProfile);

}

startAutomation();
