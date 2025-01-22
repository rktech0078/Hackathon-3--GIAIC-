import { Cards2 } from '@/components/Cards/Cards'
import Home from '@/components/Home/Home'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
            <Cards2 head='Shop'/>
            <Home/>
            {/* <ProductsPage/> */}
        </div>
    </>
  )
}
