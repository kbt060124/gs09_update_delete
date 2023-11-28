import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
    // const baseUrl = "http://localhost/00_GS/01_assignment/11_php_championship";
    const baseUrl ='https://kkgsacademy.sakura.ne.jp/gs09_update_delete/'

    const [userData, setUserData] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const reqData = await fetch(baseUrl + "/user.php");
        const resData = await reqData.json();
        setUserData(resData);
    };

    const handleDelete = async (id) => {
        const res = await axios.delete(baseUrl + "/user.php/" + id);
        setMessage(res.data.success);
        getUserData();
    };
    return (
        <React.Fragment>
            <div className="relative overflow-x-auto">
                <h5 className="text-2xl">User List</h5>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((uData, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{uData.username}</td>
                                <td className="px-6 py-4">{uData.email}</td>
                                <td className="px-6 py-4">
                                    {uData.status == 1 ? "Active" : "Inactive"}{" "}
                                </td>
                                <td>
                                    <Link
                                        to={"/edituser/" + uData.id}
                                        className=""
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        to="/delete/"
                                        className=""
                                        onClick={() => handleDelete(uData.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
