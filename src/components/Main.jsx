import React, { useState } from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import Sidebar from './Sidebar';

const Main = () => {
    let Products = [
        {
            img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E2024060915/5525d38f-365d-4af8-a2c6-a180f98bf753-e2024060915-niina-secrets-colonia-celebrate-lip-oil-shine-flower.jpg",
            title: 'Sun Glasses',
            description: 'lorem ipsum dolar',
            price: 40
        },
        {
            img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E2024060915/5525d38f-365d-4af8-a2c6-a180f98bf753-e2024060915-niina-secrets-colonia-celebrate-lip-oil-shine-flower.jpg",
            title: 'Black keyboard',
            description: 'lorem ipsum dolar',
            price: 70
        },
        {
            img: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E2024060915/5525d38f-365d-4af8-a2c6-a180f98bf753-e2024060915-niina-secrets-colonia-celebrate-lip-oil-shine-flower.jpg",
            title: 'Apple Watch',
            description: 'lorem ipsum dolar',
            price: 990
        },
        // {
        //   img:mouse,
        //   title:'Black Mouse',
        //   description:'lorem ipsum dolar',
        //   price:30
        // },
        // {
        //   img:laptop,
        //   title:'accer laptop',
        //   description:'lorem ipsum dolar',
        //   price:999
        // },
        // {
        //   img:leatherWatch,
        //   title:'Leather Watch',
        //   description:'lorem ipsum dolar',
        //   price:880
        // },
        // {
        //   img:monitor,
        //   title:'One plus monitor',
        //   description:'lorem ipsum dolar',
        //   price:40
        // },
        // {
        //   img:sunGlass,
        //   title:'Sun Glasses',
        //   description:'lorem ipsum dolar',
        //   price:40
        // },
        // {
        //   img:mouse,
        //   title:'Mouse',
        //   description:'lorem ipsum dolar',
        //   price:40
        // },
        // {
        //   img:leatherWatch,
        //   title:'leather',
        //   description:'lorem ipsum dolar',
        //   price:40
        // }, 
    ]
    const [filteredProducts, setFilteredProducts] = useState(Products)
    const searchHandler = (e) => {
        const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        if (filteredArray.length != 0) {
            setFilteredProducts(filteredArray);
        }
    }
    return (
        <>
            <Sidebar/>

<div className='w-full relative'>
    <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
            <h1 className='text-3xl font-bold'>8kra Shop</h1>
            <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                <input type="text" placeholder='Search product' className='bg-transparent outline-0'
                    onChange={searchHandler} />
                <button onClick={() => searchHandler()}><CiSearch /></button>
            </div>
        </div>
        <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
            <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                <p>Watches</p>
            </div>
            <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
                <p>Monitors</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Mouses</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Glasses</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Keyboards</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Watches</p>
            </div>
            <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                <p>Laptops</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Monitors</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                <p>Mouses</p>
            </div>
        </div>
    </div>
    <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts && filteredProducts.map((product, idx) => {
            return (
                <div key={idx} className="product h-[320px] bg-white drop-shadow-2xl p-2 border">
                    <div className='flex justify-center items-center'>
                        <img src={product.img} alt="" className='w-[60%] h-[60%] object-cover' />
                    </div>
                    <div className='m-2 bg-gray-100 p-2'>
                        <h1 className='text-xl font-semibold'>{product.title}</h1>
                        <p className='text-sm'>{product.description}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold'>${product.price}.00</p>
                            <CiShoppingCart size={'1.4rem'} />
                        </div>
                    </div>
                </div>
            )
        })}

    </div>
</div>
        </>
    )
}

export default Main