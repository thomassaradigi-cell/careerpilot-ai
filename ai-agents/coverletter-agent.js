import fetch from "node-fetch";

const HF_TOKEN = "YOUR_HUGGINGFACE_TOKEN";

export async function generateCoverLetter(jobDescription, userProfile) {

  const prompt = `
Write a professional cover letter.

Candidate profile:
${userProfile}

Job description:
${jobDescription}

Make it concise, professional, and tailored to the job.
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
