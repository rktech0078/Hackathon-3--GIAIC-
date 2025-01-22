"use client";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

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

type CardToastProps = {
    fetchData: Product; // Specify the expected type here
};
export default function CardToast({ fetchData }: CardToastProps) {


    const addToCart = (product: Product) => {
        const myCart: Product[] = JSON.parse(localStorage.getItem("myCart") || "[]");
        myCart.push(product);
        localStorage.setItem("myCart", JSON.stringify(myCart));
    };


    const notify = () => toast.success('Item Successfully Added to Cart', {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
    });;
    // className="btn btn-outline mt-5 bg-slate-500 text-white"
    return (
        <div className='w-fit ml-10' onClick={() => { addToCart(fetchData) }}>
            {/* <button onClick={notify}>Notify!</button> */}
            <button onClick={notify} className="flex btn btn-outline mt-5 bg-slate-500 text-white">
                Add to Cart
            </button>
            <ToastContainer
                position="top-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition={Bounce}
            />
        </div>
    );
}


