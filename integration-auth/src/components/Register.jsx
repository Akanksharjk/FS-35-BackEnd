import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-800">
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account 🚀
        </h2>

        <p className="text-slate-400 text-center mt-2">
          Sign up to get started
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Register
          </button>

          <p className="text-center text-slate-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setToggle(true)}
              className="text-blue-400 hover:text-blue-500 font-medium"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;