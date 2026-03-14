import fetch from "node-fetch";

export async function findJobs(keyword, location) {

  const query = `${keyword} jobs in ${location}`;

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}&num_pages=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
      }
    }
  );

  const data = await response.json();

  const jobs = data.data.map(job => ({
    title: job.job_title,
    company: job.employer_name,
    location: job.job_city,
    applyLink: job.job_apply_link
  }));

  return jobs;
}
