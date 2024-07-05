import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
const Cards = ({home, setInputDiv}) => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: "I have to create my channel the best ever coding channel in hindi for those who do not understand english pro",
      status : 'In-Complete',
    },
    {
      title: "CPP concepts",
      desc: "I need to clear basics of Cpp. Topics: Abstracrtion, Inheritance, Polymorphism, virtual functions etc.",
      status : 'Completed',
    },
    {
      title: "Assignment",
      desc: "My assignmnet on 20 march. I have to complete it.",
      status : 'In-Complete',
    },
    {
      title: "Projects",
      desc: "For Project I need to see tutorials of the code master youtube channel.",
      status : 'In-Complete',
    },
    {
      title: "Projects",
      desc: "For Project I need to see tutorials of the code master youtube channel.",
      status : 'In-Complete',
    },
  ];

  const temp = data.map((_, i) => i);
  const [important, setImportant] = useState("In-Complete");
  
  const handleImportant = (e) => {
    if (e === temp) {
      setImportant(true);
    }
  };

  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      {data &&
        data.map((items, i) => {
          return (
            <div className="bg-gray-900 flex flex-col justify-between  rounded-sm p-4">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {items.title}
                </h2>
                <h3 className="text-gray-300">{items.desc}</h3>
              </div>
              <div className="mt-4 w-full flex gap-2 items-center">
               
                  <button
                   
                    className= {`${items.status === 'In-Complete' ? 'bg-red-400' : 'bg-green-400'} p-2 rounded`}
                  >
                    {items.status}
                  </button>
               

                <div className="text-white bg-green-800 p-2 font-semibold w-3/6 text-xl flex justify-around">
                  <button>
                    <IoIosHeartEmpty />
                  </button>
                  <button>
                    <FaRegEdit />
                  </button>
                  <button>
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
{
    home === 'true' && (
        <div onClick={() => setInputDiv(true)} className="bg-gray-900 flex flex-col items-center justify-center gap-2 rounded-sm p-4 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
        <button className="text-white ">
          <IoMdAddCircle size={35} />
        </button>
        <h3 className="text-2xl text-white ">Add Task</h3>
      </div>
    )
}
      
    </div>
  );
};

export default Cards;
