export async function generateRecruiterEmail(jobTitle, company, userProfile) {

  const email = `
Subject: Application for ${jobTitle} Role

Dear Hiring Manager,

I hope you are doing well.

I recently came across the ${jobTitle} position at ${company} and was very interested in the opportunity.

Based on my background:

${userProfile}

I believe my skills align well with the role and I would love the opportunity to contribute to your team.

Please find my resume attached.

Looking forward to hearing from you.

Best regards
`;

  return email;

}
