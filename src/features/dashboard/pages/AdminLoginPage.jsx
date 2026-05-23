import {
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import apiClient from "../../../services/api/apiClient";

import useAuthStore from "../../auth/authStore";

const AdminLoginPage = () => {
  const navigate =
    useNavigate();

  const setAuth =
    useAuthStore(
      (state) => state.setAuth
    );

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        const { data } =
          await apiClient.post(
            "/admin/login",
            formData
          );

        setAuth(
          data.admin,
          data.token
        );

        toast.success(
          "Login successful"
        );

        navigate(
          "/dashboard"
        );
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Login failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-100
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
            mb-2
          "
        >
          Admin Login
        </h1>

        <p
          className="
            text-slate-500
            text-center
            mb-8
          "
        >
          Darul Iman Dashboard
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="
            flex
            flex-col
            gap-5
          "
        >
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;
