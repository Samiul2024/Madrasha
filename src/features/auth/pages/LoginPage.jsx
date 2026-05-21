import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import FormInput from "../../../components/forms/FormInput";

import useAuthStore from "../../../store/authStore";

import { loginSchema } from "../../../validations/authValidation";

const LoginPage = () => {
  const navigate = useNavigate();

  const login =
    useAuthStore((state) => state.login);

  const loading =
    useAuthStore((state) => state.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data);

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.message ||
          "Login failed"
      );
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-emerald-700">
            Darul Iman
          </h1>

          <p className="mt-2 text-slate-500">
            Admin Dashboard Login
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            placeholder="admin@daruliman.com"
            register={register}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="123456"
            register={register}
            error={errors.password}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-70 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <div className="mt-6 bg-slate-50 rounded-2xl p-4 text-sm text-slate-600">
          <p>
            Demo Credentials:
          </p>

          <p className="mt-2">
            admin@daruliman.com
          </p>

          <p>
            123456
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
