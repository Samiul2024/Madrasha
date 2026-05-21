import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../../../components/forms/FormInput";

import { loginSchema } from "../../../validations/authValidation";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            placeholder="admin@example.com"
            register={register}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            register={register}
            error={errors.password}
          />

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
