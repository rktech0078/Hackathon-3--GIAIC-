"use client"

import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { Cards3 } from '../Cards/Cards';

async function getData() {
  const fetchData = await client.fetch("*[_type == 'data']{imagePath, id, stockLevel, name, price, description, category}");
  return fetchData;
}

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

export default function Home() {
  const [data, setData] = useState<Product[]>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        <div className='flex flex-col gap-3 items-center justify-center h-screen mx-auto'>
          <span className="loading loading-dots loading-lg"></span>
          <h1 className='font-bold'>Loading....</h1>
        </div>
      </>
    )
  }

  const addToCart = (product: Product) => {
    const myCart: Product[] = JSON.parse(localStorage.getItem("myCart") || "[]");
    myCart.push(product);
    localStorage.setItem("myCart", JSON.stringify(myCart));

    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">
          Welcome to the Future of <br /> <span className="animate-pulse text-black">E-Commerce</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Experience innovation, style, and technology like never before.
        </p>
      </div>
      <div className='w-full grid p-2 gap-3 md:grid-cols-2 lg:grid-cols-3 mb-10  '>


        {
          data.map((item) => (
            <div className=''>
              <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                  <Link href={`${item.id}`}>
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      width={150}
                      height={150}
                      className='object-cover w-full h-[250px]' />
                  </Link>
                </figure>
                <div className="card-body">
                  <Link href={`${item.id}`}>
                    <h2 className="card-title line-clamp-1 ">
                      {item.name}
                      <div className="badge badge-secondary ml-3">{item.category}</div>
                    </h2>
                  </Link>
                  <p className='line-clamp-1'>{item.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline font-bold">Price: {item.price} $</div>
                    <div className="badge badge-outline font-bold">Stock: {item.stockLevel}</div>
                  </div>

                  <div className='flex w-full gap-3'>
                    <button onClick={() => { addToCart(item) }} className="btn btn-outline mt-5 bg-slate-500 text-white">Add to Cart</button>
                    <Link href={`${item.id}`}><button className="btn btn-outline mt-5 ">Buy Now</button></Link>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Cards3 />

    </>
  )
}
