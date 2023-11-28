import React, { useState, useEffect } from "react";

export const ProductList = () => {
    // const baseUrl = "http://localhost/00_GS/01_assignment/11_php_championship";
    const baseUrl ='https://kkgsacademy.sakura.ne.jp/gs09_update_delete/'

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = () => {
            fetch(baseUrl + "/product.php")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setProduct(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getProduct();
    }, []);

    return (
        <React.Fragment>
            <div className="relative overflow-x-auto">
                <h5 className="text-2xl">Product List</h5>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                product Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((pdata, index) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={index}
                            >
                                <td className="px-6 py-4">{index + 1} </td>
                                <td className="px-6 py-4">{pdata.ptitle} </td>
                                <td className="px-6 py-4">{pdata.pprice} </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={
                                            baseUrl +
                                            `/images/${pdata.pimage}.png`
                                        }
                                        height={50}
                                        width={90}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    {pdata.status == 1 ? "Active" : "Inactive"}{" "}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
