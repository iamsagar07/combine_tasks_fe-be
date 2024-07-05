import React from "react";
import { GrNotes } from "react-icons/gr";
import { MdImportantDevices } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const data = [
        {
            title: "All tasks",
            icon: <GrNotes />,
            link: "/tasks",
        },
        {
            title: "Important tasks",
            icon: <MdImportantDevices />,
            link: "/important",
        },
        {
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completed",
        },
        {
            title: "Incompleted tasks",
            icon: <MdOutlineDoNotDisturbAlt />,
            link: "/incomplete",
        },
    ];
    return (
        <>
            <div>
                <h1 className="text-gray-400 text-xl">
                    <strong className="text-3xl">S</strong>agar Chhetri
                </h1>
                <h1 className="text-md text-white mb-1">iamsagarchhetri@gmail.com</h1>
                <hr />
            </div>

            <div>
                {data.map((items, i) => (
                    <Link
                        to={items.link}
                        key={i}
                        className="my-2 text-gray-300 flex items-center gap-2 cursor-pointer hover:bg-gray-950 hover:text-white hover:rounded py-2 transition-all duration-300"
                    >
                        {items.icon}
                        {items.title}
                    </Link>
                ))}
            </div>

            <div>
                <button className="bg-gray-400 rounded p-2 w-full hover:bg-white" onClick={() => navigate('/login')}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default Sidebar;
