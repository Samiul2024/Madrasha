import { create } from "zustand";

import { loginUser } from "../services/auth/authService";

const savedUser =
  JSON.parse(localStorage.getItem("user")) || null;

const savedToken =
  localStorage.getItem("accessToken") || null;

const useAuthStore = create((set) => ({
  user: savedUser,

  token: savedToken,

  isAuthenticated: !!savedToken,

  loading: false,

  login: async (data) => {
    try {
      set({ loading: true });

      const response =
        await loginUser(data);

      localStorage.setItem(
        "accessToken",
        response.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        loading: false,
      });

      return response;
    } catch (error) {
      set({ loading: false });

      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem(
      "accessToken"
    );

    localStorage.removeItem("user");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;
