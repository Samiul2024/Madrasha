import apiClient from "../api/apiClient";

export const getGallery =
  async () => {
    const { data } =
      await apiClient.get(
        "/gallery"
      );

    return data.gallery;
  };
