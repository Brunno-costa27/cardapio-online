import React, { useState, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoLogoWhatsapp } from "react-icons/io";
import Sidebar from './Sidebar';
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'
import foto4 from '../assets/foto4.jpg'
import foto5 from '../assets/foto5.jpg'
import foto6 from '../assets/foto6.jpg'
import foto7 from '../assets/foto7.jpg'
import foto8 from '../assets/foto8.jpg'


const Main = () => {
    let Products = [
        {
            img: foto1,
            title: 'Sun Glasses',
            description: 'lorem ipsum dolar',
            price: 40
        },
        {
            img: foto2,
            title: 'Black keyboard',
            description: 'lorem ipsum dolar',
            price: 70
        },
        {
            img: foto3,
            description: 'lorem ipsum dolar',
            price: 990
        },
        {
            img: foto4,
            title: 'Black Mouse',
            description: 'lorem ipsum dolar',
            price: 30
        },
        {
            img: foto5,
            title: 'accer laptop',
            description: 'lorem ipsum dolar',
            price: 999
        },
        {
            img: foto6,
            title: 'Leather Watch',
            description: 'lorem ipsum dolar',
            price: 880
        },
        {
            img: foto7,
            title: 'One plus monitor',
            description: 'lorem ipsum dolar',
            price: 40
        },
        {
            img: foto8,
            title: 'Sun Glasses',
            description: 'lorem ipsum dolar',
            price: 40
        },

    ]

    const handleBuy = (product) => {
        const message = `Olá, gostaria de comprar o seguinte produto: ${product.title}`;
        const phone = '5584996492087'; // Coloque o número de telefone do estabelecimento aqui
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const [filteredProducts, setFilteredProducts] = useState(Products)
    const inputRef = useRef(null);
    const searchHandler = (e) => {
        const searchValue = e.target.value.toLocaleLowerCase();
        const filteredArray = Products.filter((product) => {

            // Verifique se o título do produto existe e é uma string
            const title = product.title ? product.title.toString() : '';
            return title.toLocaleLowerCase().includes(searchValue);
        })
        console.log(filteredArray)
        if (filteredArray.length != 0) {
            setFilteredProducts(filteredArray);
        } else {
            // Se nenhum produto corresponder, pode-se definir uma lista vazia ou uma mensagem
            setFilteredProducts([]);
        }
    }
    return (
        <>
            <Sidebar />

            <div className='w-full px-5 sm:w-full relative'>
                <div className='sticky top-0 z-10'>
                    <div className='header w-full py-4 flex-col justify-center items-center sm:flex sm:justify-between sm:items-center sm:p-4 bg-white'>
                        <h1 className='text-3xl font-bold py-4 text-center'>Pizza Shop</h1>
                        <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                            <input type="text" placeholder='Search product' className='bg-transparent outline-0'
                                onChange={searchHandler}
                                ref={inputRef}
                            />
                            <button onClick={() => searchHandler()}><CiSearch /></button>
                        </div>
                    </div>
                    <div className="categories hidden bg-white sm:w-full sm:flex sm:justify-between sm:space-x-8 px-2 py-10">
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
                {filteredProducts.length ? (
                    <>
                        <div className="products grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-3 sm:gap-9 sm:p-4 sm:z-20 ">
                            {filteredProducts && filteredProducts.map((product, idx) => {
                                return (
                                    <div key={idx} className="product  sm:h-[320px] bg-white sm:drop-shadow-2xl border rounded-t-xl rounded-b-md">
                                        <div className='flex justify-center items-center'>
                                            <img src={product.img} alt="" className='w-full h-[60%]  object-cover rounded-t-xl' />
                                        </div>
                                        <div className='m-2 bg-gray-100 p-2 overflow-hidden'>
                                            <h1 className='text-xl font-semibold'>{product.title}</h1>
                                            <p className='text-sm'>{product.description}</p>
                                            <div  className='flex justify-between items-center'>
                                                <p className='text-xl font-bold'>${product.price}.00</p>
                                                
                                                <button onClick={() => handleBuy(product.title)}>
                                                
                                                <IoLogoWhatsapp size={'1.4rem'} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </>
                ) : (
                    <div className='w-full h-32 font-sans font-semibold text-xl flex justify-center items-center'>
                        <h1>Nenhum item encontrado</h1>
                    </div>
                )}

            </div>
        </>
    )
}

export default Main