"use client";

import { Cards2, Cards3 } from "@/components/Cards/Cards";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Link from "next/link";

type Product = {
    id: string;
    imagePath: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
};

const Page = () => {
    const [myCart, setMyCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("myCart");
        if (storedCart) {
            setMyCart(JSON.parse(storedCart));
        }
    }, []);

    const handleDelete = (id: string) => {
        const updatedCart = myCart.filter((item) => item && item.id !== id); // Handle null/undefined items
        setMyCart(updatedCart);
        localStorage.setItem("myCart", JSON.stringify(updatedCart));
    };

    const totalPrice = myCart.reduce((acc, item) => {
        return item ? acc + item.price : acc; // Skip null/undefined items
    }, 0);

    return (
        <>
            <Cards2 head="My Cart" />
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {/* Cart Table */}
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-yellow-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Product Name
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Subtotal
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {myCart.map((item, index) =>
                                    item ? ( // Check if item is valid
                                        <tr key={index}>
                                            <td className="px-6 py-4">
                                                <Image
                                                    src={item.imagePath}
                                                    alt={item.name}
                                                    width={100}
                                                    height={100}
                                                    className="w-16 h-16 rounded-md"
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{item.name}</td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-600">
                                                {item.price}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-600">
                                                {item.price}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="text-red-500 hover:text-black"
                                                >
                                                    <RiDeleteBin7Fill className="size-[25px]" />
                                                </button>
                                            </td>
                                        </tr>
                                    ) : null // Skip null/undefined items
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Totals */}
                    <div className="mt-10 p-6 bg-yellow-100 rounded-lg shadow-md max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-6">Cart Totals</h2>
                        <div className="flex justify-between text-sm font-medium">
                            <span>Subtotal</span>
                            <span className="text-gray-600">{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium mt-4">
                            <span>Total</span>
                            <span className="text-yellow-600">{totalPrice.toFixed(2)}</span>
                        </div>
                        <Link href={"/contacts"}>
                            <button className="mt-6 w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-600">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Cards3 />
        </>
    );
};

export default Page;
