import apiClient from "../api/apiClient";

export const getNotices =
  async () => {
    const { data } =
      await apiClient.get(
        "/notices"
      );

    return data.notices;
  };

export const getSingleNotice =
  async (slug) => {
    const { data } =
      await apiClient.get(
        `/notices/${slug}`
      );

    return data.notice;
  };
