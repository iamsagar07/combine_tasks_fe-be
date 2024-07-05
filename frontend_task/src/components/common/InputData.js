import React from "react";
import { MdOutlineClose } from "react-icons/md";

const InputData = ({ inputDiv, setInputDiv}) => {

  return (
    <>
      <div
        className={`${inputDiv} fixed top-0 left-0 bg-gray-500 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${inputDiv} fixed top-0 left-0 flex justify-center items-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4  rounded">
          <div className="flex justify-end text-white  cursor-pointer">
            <div className="" onClick={() => setInputDiv("hidden")}>
              <MdOutlineClose size={35} />
            </div>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700"
          />
          <textarea
            name="desc"
            Icols="30"
            rows="10"
            placeholder="Description"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          ></textarea>
          <button className="px-3 py-2 bg-green-500 rounded text-white text-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
