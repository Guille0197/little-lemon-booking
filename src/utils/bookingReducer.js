import { fetchAPI } from "../api";

export const initializeTimes = (date = new Date()) => fetchAPI(date);

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES" && action.date instanceof Date) {
    return fetchAPI(action.date);
  }
  return state;
};

export const toLocalDate = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const toDateInputValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
