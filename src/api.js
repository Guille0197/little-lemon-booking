// Local copy of the official Meta/Coursera Capstone mock API.
// Source: https://github.com/courseraap/capstone/blob/main/api.js
// This learning API does not connect to a real restaurant backend.

const seededRandom = (seed) => {
  const modulus = 2 ** 35 - 31;
  const multiplier = 185852;
  let value = seed % modulus;
  return () => {
    value = (value * multiplier) % modulus;
    return value / modulus;
  };
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());
  for (let hour = 17; hour <= 23; hour += 1) {
    if (random() < 0.5) result.push(`${hour}:00`);
    if (random() < 0.5) result.push(`${hour}:30`);
  }
  return result;
};

export const submitAPI = (formData) => {
  // The official course mock accepts the payload and returns true.
  // A production application would send it to a protected backend.
  Boolean(formData);
  return true;
};
