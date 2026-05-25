import apiClient from "../api/apiClient";

export const getCourses =
  async () => {
    const { data } =
      await apiClient.get(
        "/courses"
      );

    return data.courses;
  };

export const getSingleCourse =
  async (id) => {
    const { data } =
      await apiClient.get(
        `/courses/${id}`
      );

    return data.course;
  };
