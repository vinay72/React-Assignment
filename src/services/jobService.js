// src/services/jobService.js
const API_URL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const fetchJobs = async (limit, offset) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit, offset })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
