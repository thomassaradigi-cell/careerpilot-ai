import fetch from "node-fetch";

const HF_TOKEN = "hf_LrsHOkQeLxshXvTwWVGZsltj1NAjpbyXrd";

export async function generateResume(jobDescription, userProfile) {

  const prompt = `
Create an ATS optimized resume.

Candidate profile:
${userProfile}

Job description:
${jobDescription}

Return the resume in this format:

Summary
Skills
Experience
Education
`;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt
      })
    }
  );

  const result = await response.json();
  return result;
}
