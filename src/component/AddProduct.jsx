import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
    // const baseUrl = "http://localhost/00_GS/01_assignment/11_php_championship";
    const baseUrl ='https://kkgsacademy.sakura.ne.jp/gs09_update_delete/'

    const navigate = useNavigate();
    const [ptitle, setPtitle] = useState("");
    const [pprice, setPprice] = useState("");
    const [pfile, setPfile] = useState("");
    const [message, setMessage] = useState("");

    const uploadProduct = async () => {
        const formData = new FormData();
        formData.append("ptitle", ptitle);
        formData.append("pprice", pprice);
        formData.append("pfile", pfile);
        console.log(pfile);
        const responce = await axios.post(
            baseUrl+"/product.php",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        // if (responce.data.success) {
        //     setMessage(responce.data.success);
        //     setTimeout(() => {
        //         navigate("/productlist");
        //     }, 2000);
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadProduct();
    };
    return (
        <React.Fragment>
            <div className="">
                <div className="">
                    <div className="">
                        <h5 className="text-2xl">Add Product </h5>
                        <p className="">{message}</p>

                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label className="">
                                    Product Title{" "}
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        className=""
                                        onChange={(e) =>
                                            setPtitle(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label className="">
                                    Product Price{" "}
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        className=""
                                        onChange={(e) =>
                                            setPprice(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label className="">
                                    Product Image
                                </label>
                                <div className="">
                                    <input
                                        type="file"
                                        className=""
                                        onChange={(e) =>
                                            setPfile(e.target.files[0])
                                        }
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label className=""></label>
                                <div className="">
                                    <button
                                        type="submit"
                                        className=""
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

