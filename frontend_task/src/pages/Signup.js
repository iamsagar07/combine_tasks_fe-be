import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-950">
        <div className="text-white text-2xl">Signup</div>
        <input
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <button className="bg-blue-400 text-x1 font-semibold text-white px-3 py-2 rounded w-full">
          SignUp
        </button>
        <h2 className="text-gray-300 ml-8 py-2">
          Already having an account ? <Link className="text-green-600" to={"/login"}>Login</Link> here
        </h2>
      </div>
    </div>
  );
};

export default Signup;
