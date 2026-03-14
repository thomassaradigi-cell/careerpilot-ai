export async function findJobs(keyword, location) {

  console.log("Searching jobs for:", keyword, "in", location);

  const jobs = [
    {
      title: "Business Analyst",
      company: "Amazon",
      location: "India"
    },
    {
      title: "Financial Analyst",
      company: "Deloitte",
      location: "India"
    },
    {
      title: "Data Analyst",
      company: "Accenture",
      location: "India"
    }
  ];

  return jobs;

}
