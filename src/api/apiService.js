import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://www.perdidogs.com.br`,
});

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await apiClient.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while uploading the image:", error);
    throw error;
  }
};

export const getInundogs = async (params) => {
  console.log(params);
  try {
    const response = await apiClient.get("/api/inundogs", { ...{ params } });
    return response.data;
  } catch (error) {
    console.error("Error while fetching inundogs:", error);
    throw error;
  }
};

export const createInundog = async (inundogData) => {
  try {
    console.log({ inundogData });
    const response = await apiClient.post("/api/inundog", inundogData);
    return response.data;
  } catch (error) {
    console.error("Error while creating inundog:", error);
    throw error;
  }
};

export const updateInundog = async (inundogId, inundogData) => {
  try {
    const response = await apiClient.put(`/api/inundog/${inundogId}`, inundogData);
    return response.data;
  } catch (error) {
    console.error(`Error while updating inundog with ID ${inundogId}:`, error);
    throw error;
  }
};

export const deleteInundog = async (inundogId) => {
  try {
    const response = await apiClient.delete(`/api/inundog/${inundogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while deleting inundog with ID ${inundogId}:`, error);
    throw error;
  }
};
