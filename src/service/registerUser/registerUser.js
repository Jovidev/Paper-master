import api from "../api";

export const registerUser = async (data) => {
  try {
    const response = await api.post("/user", data);
    console.log('response', response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};