import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
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
  try {
    const response = await apiClient.get("/api/inundogs", { ...{ params } });
    return response.data;
  } catch (error) {
    console.error("Error while fetching inundogs:", error);
    throw error;
  }
};

export const getEnderecoList = async () => {
  try {
    const response = await apiClient.get("/api/enderecos-unicos");
    return response.data;
  } catch (error) {
    console.error("Error while fetching enderecos unicos:", error);
    throw error;
  }
};

export const getLares = async (params) => {
  try {
    const response = await apiClient.get("/api/lares", { ...{ params } });
    return response.data;
  } catch (error) {
    console.error("Error while fetching lares:", error);
    throw error;
  }
};

export const getSumidogs = async (params) => {
  try {
    const response = await apiClient.get("/api/sumidogs", { ...{ params } });
    return response.data;
  } catch (error) {
    console.error("Error while fetching sumidogs:", error);
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

export const createLar = async (larData) => {
  try {
    console.log({ larData });
    const response = await apiClient.post("/api/lar", larData);
    return response.data;
  } catch (error) {
    console.error("Error while creating lar:", error);
    throw error;
  }
};

export const createSumidog = async (sumidogData) => {
  try {
    console.log({ sumidogData });
    const response = await apiClient.post("/api/sumidog", sumidogData);
    return response.data;
  } catch (error) {
    console.error("Error while creating sumidog:", error);
    throw error;
  }
};

export const updateInundog = async (inundogId, inundogData) => {
  try {
    const response = await apiClient.put(
      `/api/inundog/${inundogId}`,
      inundogData
    );
    return response.data;
  } catch (error) {
    console.error(`Error while updating inundog with ID ${inundogId}:`, error);
    throw error;
  }
};

export const updateLar = async (larId, larData) => {
  try {
    const response = await apiClient.put(`/api/lar/${larId}`, larData);
    return response.data;
  } catch (error) {
    console.error(`Error while updating lar with ID ${larId}:`, error);
    throw error;
  }
};

export const updateSumidog = async (sumidogId, sumidogData) => {
  try {
    const response = await apiClient.put(
      `/api/sumidog/${sumidogId}`,
      sumidogData
    );
    return response.data;
  } catch (error) {
    console.error(`Error while updating sumidog with ID ${sumidogId}:`, error);
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

export const deleteLar = async (larId) => {
  try {
    const response = await apiClient.delete(`/api/lar/${larId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while deleting lar with ID ${larId}:`, error);
    throw error;
  }
};

export const deleteSumidog = async (sumidogId) => {
  try {
    const response = await apiClient.delete(`/api/sumidog/${sumidogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while deleting sumidog with ID ${sumidogId}:`, error);
    throw error;
  }
};
