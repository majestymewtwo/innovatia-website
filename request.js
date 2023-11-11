import axios from "axios";

export const sendRequest = async (data, eventPath) => {
  const response = await axios.post(`${process.env.API_URL + eventPath}`, data);
  return response.data;
};
