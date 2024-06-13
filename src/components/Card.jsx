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
import Modal from 'react-modal';


export function Card({ products }) {

    const merda = [products]

    console.log(products);

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
    const [title, setTitle] = useState("");


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

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
        const filteredArray = Products.filter((product) => {

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

        merda.map(product => {

            return (
<>
                <div className="product  h-full drop-shadow-2xl border rounded-t-xl rounded-b-md border-none">
                    <div className='flex justify-center items-center'>
                        <ImageWithDefaultSize src={product.img} className='rounded-t-xl' />
                        {/* <img src={product.img} alt="" className='w-full h-full  object-cover rounded-t-xl' /> */}
                    </div>
                    <div className='flex-col leading-loose bg-gray-100  p-4 rounded-b-xl overflow-hidden '>
                        <h1 className='text-xl text-[#B5121B] font-semibold' >{product.title}</h1>
                        <p className=' text-sm text-[#B5121B]'>{product.description}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold text-[#B5121B]'>R$ {product.price}.00</p>

                            {/* <button onClick={() => handleBuy(product.title)}>

                                                    <IoLogoWhatsapp size={'1.4rem'} fill='#25D366' />
                                                </button> */}
                        </div>

                        <div className="flex flex-col py-2 gap-4 font-sans text-xl">
                            <div className='flex gap-4 justify-between'>
                                <label className='text-center flex justify-center items-center font-bold' htmlFor="pizza-size">Tamanho:</label>
                                <select className='p-2' id="pizza-size " value={size} onChange={handleSizeChange}>
                                    <option value="pequena">Pequena</option>
                                    <option value="media">Média</option>
                                    <option value="grande">Grande</option>
                                    <option value="familia">Família</option>
                                </select>
                            </div>
                            <div className='flex gap-4 justify-between'>
                                <label className='py-2 font-bold' htmlFor="pizza-quantity">Quantidade:</label>
                                <input
                                    className='w-1/6 px-2 rounded-md focus:border-[#B5121B] focus:outline-none focus:ring-2 focus:ring-[#B5121B]'
                                    type="number" id="pizza-quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange} />
                            </div>
                        </div>

                        <div className='flex justify-center items-center p-2 '>
                            <button
                                onClick={() => openModal()}
                                className='w-full p-2  bg-gray-200  rounded-full text-xl hover:bg-[#B5121B] hover:text-white active:bg-[#B5121B] focus:outline-none focus:ring focus:ring-[#e47e83] '>
                                Finalizar pedido
                            </button>
                        </div>
                    </div>

                </div>

                <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            contentLabel="Enviar o pedido?"
                                            className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-75"
                                            overlayClassName="fixed inset-0 bg-opacity-50"
                                        >
                                            <div className="bg-white rounded-lg p-6 max-w-xl mx-auto flex flex-col">
                                                <h2 className="text-2xl font-bold mb-4">📝 Pedido</h2>
                                                <p className="mb-4">Deseja enviar o pedido?</p>
                                                <ol className='flex flex-col px-2'>
                                                    <li>✅ Quantidade: {quantity}</li>
                                                    <li>✅ Tamanho: {size}</li>
                                                    <li>✅ Titulo: {product.title}</li>
                                                    <li>✅ Preço: {product.price}</li>
                                                </ol>
                                                <div className='flex justify-center items-center gap-6 mt-4'>
                                                    <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded">
                                                        Fechar
                                                    </button>
                                                    <button onClick={() => (addToCart(product))} className="px-4 py-2 bg-red-500 text-white rounded">
                                                        Enviar
                                                    </button>
                                                </div>
                                            </div>
                                        </Modal>
                </>
                
            )

        })

    )
}