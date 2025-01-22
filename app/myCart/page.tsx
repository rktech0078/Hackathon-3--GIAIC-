"use client"

import { Cards2, Cards3 } from '@/components/Cards/Cards'
import Image from 'next/image'
import React from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from 'next/link';



type Product = {
    id: string,
    imagePath: string,
    name: string,
    price: number,
    description: string,
    discountPercentage: number,
    isFeaturedProduct: boolean,
    stockLevel: number,
    category: string
}

const Page = () => {

    const [myCart, setMyCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("myCart");
        if (storedCart) {
            setMyCart(JSON.parse(storedCart));
        }
    }, []);

    const handleDelete = (id: string) => {
        const updatedCart = myCart.filter(item => item.id !== id);
        setMyCart(updatedCart);
        localStorage.setItem("myCart", JSON.stringify(updatedCart));

        // alert("Item removed from cart");
    };

    // const totalPrice = myCart.reduce((acc, item) => acc + item.price, 0);
    const totalPrice = myCart.reduce((acc, item) => {
        return item ? acc + item.price : acc; // Null or undefined items ko skip karna
    }, 0);


    return (
        <>
            <Cards2 head='My Cart' />
            <div>

                {/* <div className='grid md:flex justify-between'>

                    <div className='p-1'>

                        <div className='grid md:flex justify-between items-center font-bold rounded-[5px] p-7 w-[320px] md:w-[650px] h-full md:h-[50px] bg-[#FFF9E5] mt-10'>
                            <h1>Product</h1>
                            <h1>Product Name</h1>
                            <h1>Price</h1>
                            <h1>Subtotal</h1>
                        </div>


                        <div className='grid md:flex justify-between items-center font-bold rounded-[5px] p-7 w-[310px] md:w-[650px] h-full md:h-[50px] mt-14'>
                            <Image src={"/images/cart/cart1.svg"} alt='CART ITEMS' width={100} height={100} className='w-[100px] h-[100px]' />
                            <h1 className='text-[#9F9F9F]'>Asgaard sofa</h1>
                            <h1 className='text-[#9F9F9F]'>Rs. 250,000.00</h1>
                            <h1 className=''>Rs. 250,000.00</h1>
                            <RiDeleteBin7Fill className='text-[#FBEBB5] w-[21px] h-[21px] hover:text-black' />
                        </div>

                    </div>

                    <div className='w-[390px] h-[290px] bg-[#FFF9E5] flex flex-col items-center justify-center mt-11'>
                        <h1 className='font-bold text-[32px]'>Cart Totals</h1>

                        <div className='flex justify-between mt-8'>
                            <h1 className='text-[16px] font-bold'>Subtotal</h1>
                            <p className='text-[#9F9F9F] text-[16px] ml-7'>Rs. 250,000.00</p>
                        </div>

                        <div className='flex justify-between mt-8'>
                            <h1 className='text-[16px] font-bold'>Total</h1>
                            <p className='text-[#B88E2F] text-[16px] ml-7'>Rs. 250,000.00</p>
                        </div>

                    </div>

                </div> */}

                <div className="p-6 bg-gray-50 min-h-screen">
                    <div className="max-w-6xl mx-auto">
                        {/* <!-- Cart Table --> */}
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

                                {myCart.map((item, index) => (
                                    <tbody key={index} className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4">
                                                <Image src={item.imagePath} alt={item.name} width={100} height={100} className="w-16 h-16 rounded-md" />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-600">
                                                {item.price}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-600">
                                                {item.price}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button onClick={() => { handleDelete(item.id) }} className="text-red-500 hover:text-black">
                                                    <RiDeleteBin7Fill className='size-[25px]' />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>

                        {/* <!-- Cart Totals --> */}
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



            </div>

            <Cards3 />










        </>
    )
}

export default Page