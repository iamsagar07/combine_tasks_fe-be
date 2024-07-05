import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-950">
        <div className="text-white text-2xl">LogIn</div>

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
          LogIn
        </button>

        <h2 className="text-gray-300 ml-8 py-2">
          Not having an account ? <Link className="text-green-600" to={"/signup"}>Signup</Link> here
        </h2>
      </div>
    </div>
  );
};

export default LogIn;
