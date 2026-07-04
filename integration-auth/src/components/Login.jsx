import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-800">
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400 text-center mt-2">
          Login to your account
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-400 hover:text-blue-500"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

          <p className="text-center text-slate-400">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="text-blue-400 hover:text-blue-500 font-medium"
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