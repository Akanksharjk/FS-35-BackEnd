import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { api } from "../config/axiosInstance";

const Login = ({ setToggle }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState();

  const handlechange = async (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await api.post("/api/auth/login", formData);
      console.log(res.data.data);
      dispatch(addUser(res.data.data));
    } catch (error) {
      console.log("error in register api", error);
    }
  };
  return (
    <div
      className="
        flex
        min-h-screen
        px-4
        bg-slate-950
        items-center justify-center
      "
    >
      <div
        className="
          w-full max-w-md
          p-8
          bg-slate-900
          rounded-2xl border border-slate-800
          shadow-xl
        "
      >
        <h2
          className="
            text-3xl font-bold text-white text-center
          "
        >
          Welcome Back 👋
        </h2>

        <p
          className="
            mt-2
            text-slate-400 text-center
          "
        >
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-8 space-y-5
          "
        >
          <div>
            <label
              className="
                block
                mb-2
                text-sm text-slate-300
              "
            >
              Email
            </label>

            <input
              onChange={handlechange}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="
                w-full
                px-4 py-3
                text-white
                bg-slate-800
                rounded-lg border border-slate-700
                outline-none focus:border-blue-500
              "
            />
          </div>

          <div>
            <label
              className="
                block
                mb-2
                text-sm text-slate-300
              "
            >
              Password
            </label>

            <input
              onChange={handlechange}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="
                w-full
                px-4 py-3
                text-white
                bg-slate-800
                rounded-lg border border-slate-700
                outline-none focus:border-blue-500
              "
            />
          </div>

          <div
            className="
              flex
              text-sm
              justify-between items-center
            "
          >
            <label
              className="
                flex
                text-slate-300
                items-center gap-2
              "
            >
              <input
                type="checkbox"
                className="
                  accent-blue-500
                "
              />
              Remember me
            </label>

            <button
              type="button"
              className="
                text-blue-400
                hover:text-blue-500
              "
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="
              w-full
              py-3
              text-white font-semibold
              bg-blue-600
              rounded-lg
              hover:bg-blue-700
            "
          >
            Login
          </button>

          <p
            className="
              text-center text-slate-400
            "
          >
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="
                text-blue-400 font-medium
                hover:text-blue-500
              "
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
