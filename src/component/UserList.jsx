
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
        const reqData = await fetch(
            baseUrl+"/user.php"
        );
        const resData = await reqData.json();
        setUserData(resData);
    };

    const handleDelete = async (id) => {
        const res = await axios.delete(
            baseUrl + "/user.php/" + id
        );
        setMessage(res.data.success);
        getUserData();
    };
    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <h5>UserList</h5>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((uData, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{uData.username}</td>
                                        <td>{uData.email}</td>
                                        <td>
                                            {uData.status == 1
                                                ? "Active"
                                                : "Inactive"}{" "}
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
                                                onClick={() =>
                                                    handleDelete(uData.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
