import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
    // const baseUrl = "http://localhost/00_GS/01_assignment/11_php_championship";
    const baseUrl ='https://kkgsacademy.sakura.ne.jp/gs09_update_delete/'

    const navigate = useNavigate();
    const {id} = useParams();
    const [formvalue, setFormvalue] = useState({
        username: "",
        email: "",
        status: "",
    });
    const [message, setMessage] = useState("");
    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const userRowdata = async () => {
            const getUserData = await fetch(baseUrl + "/user.php/" + id);
            const resuserdata = await getUserData.json();
            console.log(resuserdata);
            setFormvalue(resuserdata);
        }
        userRowdata();

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formvalue);
        const formData = {
            id:id,
            username: formvalue.username,
            email: formvalue.email,
            status: formvalue.status,
        };
        const res = axios.put(
            baseUrl+"/user.php",
            formData
        );
        /////////////チューターさんに聞いてみる！！！！！！！！！！！/////////////
        // console.log(res);
        // if (res.data.success) {
        //     setMessage(res.data.success);
        //     setTimeout(() => {
        //         navigate("/userlist");
        //     }, 2000);
        // }
    };

    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <h5 className="text-2xl">AddUser</h5>
                        {/* <p>{message}</p> */}
                        {/* <p> {console.log(message)} </p> */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="">User name</label>
                                <div>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formvalue.username}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="">Email</label>
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={formvalue.email}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="">Status</label>
                                <div>
                                    <select
                                        name="status"
                                        value={formvalue.status}
                                        onChange={handleInput}
                                    >
                                        <option value="">
                                            --Select Status--
                                        </option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className=""></label>
                                <div>
                                    <button name="submit">Updata</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
