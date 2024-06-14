import React, { useState, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoLogoWhatsapp } from "react-icons/io";
import Sidebar from './Sidebar';

import { ImageWithDefaultSize } from './ImageWithDefaultSize';
import Modal from 'react-modal';
import { Card } from './Card';


const Main = ({products}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);



    

    const handleBuy = (product) => {
        // console.log(product)

        // const message = `Olá, gostaria de comprar o seguinte produto: ${product}`;
        const message = `
        Olá! Gostaria de fazer um pedido.
        Aqui está o produto que desejo:

        🍕 *Produto: ${product.title};
        📝 *Descrição: ${product.description};
        🔢 *Quantidade: ${product.quantity};
        📏 *Tamanho: ${product.size};

        ℹ️ Por favor, informe o tempo estimado de entrega e o valor total.
        
        😊 Muito obrigado!`
            ;
        const phone = '5584996492087'; // Coloque o número de telefone do estabelecimento aqui
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };



    const [size, setSize] = useState('pequena');
    const [quantity, setQuantity] = useState();
    // const [title, setTitle] = useState("");


    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value);
    // };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const addToCart = (product) => {
        const item = {
            ...product,
            size,
            quantity,
        };
        // handleBuy(item)
        console.log(product);
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const [filteredProducts, setFilteredProducts] = useState(products)
    const inputRef = useRef(null);
    const searchHandler = (e) => {
        const searchValue = e.target.value.toLocaleLowerCase();
        const filteredArray = products.filter((product) => {

            // Verifique se o título do produto existe e é uma string
            const title = product.title ? product.title.toString() : '';
            return title.toLocaleLowerCase().includes(searchValue);
        })
        // console.log(filteredArray)
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
                {filteredProducts?.length ? (
                    <>
                        <div className="products grid grid-cols-1 gap-9 sm:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 sm:gap-9 sm:p-4 z-20 ">
                            {filteredProducts && filteredProducts.map((product) => {
                                return (
                                    <>
                                        <Card  products={product}/>

                                        
                                    </>
                                )
                            })}

                        </div>
                    </>
                ) : (
                    <div className='w-full h-screen font-semibold text-4xl flex justify-center items-center text-white'>
                        <h1>Nenhum item encontrado 😢</h1>
                    </div>
                )}

            </div>
        </>
    )
}

export default Main