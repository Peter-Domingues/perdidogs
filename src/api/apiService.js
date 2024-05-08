import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const getInundogs = async (params) => {
  try {
    const response = await apiClient.get("/inundogs", params);
    return response.data;
  } catch (error) {
    console.error("Error while fetching inundogs:", error);
    throw error;
  }
};

export const createInundog = async (inundogData) => {
  try {
    const response = await apiClient.post("/inundog", inundogData);
    return response.data;
  } catch (error) {
    console.error("Error while creating inundog:", error);
    throw error;
  }
};

export const updateInundog = async (inundogId, inundogData) => {
  try {
    const response = await apiClient.put(`/inundog/${inundogId}`, inundogData);
    return response.data;
  } catch (error) {
    console.error(`Error while updating inundog with ID ${inundogId}:`, error);
    throw error;
  }
};

export const deleteInundog = async (inundogId) => {
  try {
    const response = await apiClient.delete(`/inundog/${inundogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while deleting inundog with ID ${inundogId}:`, error);
    throw error;
  }
};
