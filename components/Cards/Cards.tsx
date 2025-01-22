import Image from 'next/image'
import React from 'react'

export default function Cards() {
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

type Head = {
    head: string,
    subHead?: string,
}


export function Cards2({ head, subHead }: Head) {
    return (
        <div>

            <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3 mb-10   '>
                <div className='flex flex-col items-center pt-3'>
                    <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                    <h1 className='text-[48px]'>{head}</h1>
                    <div className='flex'>
                        <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                        <p>My Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export function Cards3() {
    return (
        <>
            <div className='w-full h-full  flex flex-col justify-between items-center p-5  gap-5 lg:flex-row bg-[#FAF4F4] mb-24'>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px]'>Free Delivery</h1>
                    <p className='text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px] '>90 Days Return</h1>
                    <p className='text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px]'>Secure Payment</h1>
                    <p className='text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>

            </div>
        </>
    )
}
