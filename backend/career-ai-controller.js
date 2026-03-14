import { findJobs } from "../ai-agents/job-finder-agent.js";
import { generateResume } from "../ai-agents/resume-agent.js";
import { generateCoverLetter } from "../ai-agents/coverletter-agent.js";
import { saveApplication } from "../database/job-database.js";

export async function runCareerAI(keyword, location, userProfile) {

  console.log("Searching jobs...");

  const jobs = await findJobs(keyword, location);

  for (const job of jobs) {

    console.log("Processing job:", job.title);

    const resume = await generateResume(job.title, userProfile);

    const coverLetter = await generateCoverLetter(job.title, userProfile);

    saveApplication(job.title, job.company);

    console.log({
      job: job.title,
      company: job.company,
      resume,
      coverLetter
    });

  }

}
