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
import { ImageWithDefaultSize } from './ImageWithDefaultSize';


const Main = () => {
    let Products = [
        {
            img: foto1,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 20
        },
        {
            img: foto2,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 50
        },
        {
            img: foto3,
            title: "Frango com catupiry",
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 90
        },
        {
            img: foto4,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 30
        },
        {
            img: foto5,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 99
        },
        {
            img: foto6,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 80
        },
        {
            img: foto7,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 40
        },
        {
            img: foto8,
            title: 'Frango com catupiry',
            description: 'Molho de tomate italiano, Catupiry e orégano.',
            price: 40
        },

    ]

    const handleBuy = (product) => {
        // const message = `Olá, gostaria de comprar o seguinte produto: ${product}`;
        const message = `Olá! Gostaria de fazer um pedido. Aqui está o produto que desejo:
        🍕 Produto: ${product}
        ℹ️ Por favor, informe o tempo estimado de entrega e o valor total. Muito obrigado!`;
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
                <div className=' sticky top-0 z-10'>
                    <div className='header bg-[#9E0000] w-full py-4 lg:flex justify-center items-center sm:flex sm:gap-2 sm:justify-between  sm:p-4 '>
                        <div className='justify-center items-center'>
                            <h1 className='text-white text-3xl font-bold py-4 text-center'>🍕 Pizza Shop</h1>
                        </div>
                        <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                            <input type="text" placeholder='Search product' className='bg-transparent outline-0'
                                onChange={searchHandler}
                                ref={inputRef}
                            />
                            <button onClick={() => searchHandler()}><CiSearch /></button>
                        </div>
                    </div>
                    {/* <div className="categories  hidden bg-white sm:w-full sm:flex sm:justify-between sm:space-x-8 px-2 py-10">
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
                    </div> */}
                </div>
                {filteredProducts.length ? (
                    <>
                        <div className="products grid grid-cols-1 gap-9 sm:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 sm:gap-9 sm:p-4 z-20 ">
                            {filteredProducts && filteredProducts.map((product, idx) => {
                                return (
                                    <div key={idx} className="product  h-full drop-shadow-2xl border rounded-t-xl rounded-b-md border-none">
                                        <div className='flex justify-center items-center'>
                                            <ImageWithDefaultSize src={product.img} className='rounded-t-xl' />
                                            {/* <img src={product.img} alt="" className='w-full h-full  object-cover rounded-t-xl' /> */}
                                        </div>
                                        <div className='flex-col leading-loose bg-gray-100  p-4 rounded-b-xl overflow-hidden '>
                                            <h1 className='text-xl text-[#B5121B] font-semibold'>{product.title}</h1>
                                            <p className=' text-sm text-[#B5121B]'>{product.description}</p>
                                            <div className='flex justify-between items-center'>
                                                <p className='text-xl font-bold text-[#B5121B]'>R$ {product.price}.00</p>

                                                <button onClick={() => handleBuy(product.title)}>

                                                    <IoLogoWhatsapp size={'1.4rem'} fill='#25D366' />
                                                </button>
                                            </div>
                                            
                                            <div className="flex flex-col justify-start items-start py-2 gap-4 font-sans text-xl">
                                                <div className='flex gap-4'>
                                                <label className='text-center flex justify-center items-center font-bold' for="pizza-size">Tamanho:</label>
                                                <select className='p-2' id="pizza-size">
                                                    <option value="pequena">Pequena</option>
                                                    <option value="media">Média</option>
                                                    <option value="grande">Grande</option>
                                                    <option value="familia">Família</option>
                                                </select>
                                                </div>
                                                <div className='flex gap-4'>
                                                <label className='p-2 font-bold' for="pizza-quantity">Quantidade:</label>
                                                <input className='w-1/6 px-2 rounded-md focus:border-[#B5121B] focus:outline-none focus:ring-2 focus:ring-[#B5121B]' type="number" id="pizza-quantity" />
                                                </div>
                                            </div>

                                            <div className='flex justify-center items-center p-2 '>
                                            <button className='w-full p-2  bg-gray-200  rounded-full text-xl hover:bg-[#B5121B] hover:text-white active:bg-[#B5121B] focus:outline-none focus:ring focus:ring-[#e47e83] '>Adicionar ao Carrinho</button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </>
                ) : (
                    <div className='w-full h-screen font-sans font-semibold text-4xl flex justify-center items-center text-white'>
                        <h1>Nenhum item encontrado 😢</h1>
                    </div>
                )}

            </div>
        </>
    )
}

export default Main