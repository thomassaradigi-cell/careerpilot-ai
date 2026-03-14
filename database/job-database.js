const applications = [];

export function saveApplication(job, company) {

  const record = {
    job,
    company,
    status: "Applied",
    date: new Date().toISOString()
  };

  applications.push(record);

  console.log("Application saved:", record);

}

export function getApplications() {

  return applications;

}
