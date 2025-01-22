"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ClerkButton from '../clerk/ClerkSignIn';

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

export default function Navbar() {

    const [myCart, setMyCart] = useState<Product[]>([]);
    useEffect(() => {
        const storedCart = localStorage.getItem("myCart");
        if (storedCart) {
            setMyCart(JSON.parse(storedCart));
        }
    }, []);

    // const totalPrice = myCart.reduce((acc, item) => acc + item.price, 0);
    const totalPrice = myCart.reduce((acc, item) => {
        return item ? acc + item.price : acc; // Null or undefined items ko skip karna
    }, 0);


    return (
        <>
            <div className={`navbar bg-base-100 border-b-2 md:p-5`}>
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Homepage</Link></li>
                            <li><Link href={"/shop"}>Shop</Link></li>
                            <li><Link href={"/cart"}>Cart</Link></li>
                            <li><Link href={"/contacts"}>Contact</Link></li>
                            <li><Link href={"/studio"} target='_blank'>Sanity Studio</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-start mr-[400px]  hidden md:flex">
                    {/* <Link href={"/"}><Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' /></Link> */}
                    <Link href={"/"} className="btn btn-ghost text-xl">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                            Hackathon<span className="text-yellow-400">-3</span>
                        </h1>
                    </Link>
                </div>
                <div className="navbar-end">

                    {/* <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button> */}

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{myCart.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{myCart.length} Items</span>
                            <span className="text-info">Subtotal: {totalPrice.toFixed(2)}</span>
                            <Link href={"/myCart"}><div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div></Link>
                        </div>
                    </div>
                </div>


                <ClerkButton />



            </div>
        </>
    )
}


// const <div className="dropdown dropdown-end">
// <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//     <div className="w-10 rounded-full">
//         <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>
// </div>
// <ul
//     tabIndex={0}
//     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//     <li>
//         <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//         </a>
//     </li>
//     <li><a>Settings</a></li>
//     <li><a>Logout</a></li>
// </ul>
// </div>




/**

 */