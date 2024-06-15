import React, { useState, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoLogoWhatsapp } from "react-icons/io";
import Sidebar from './Sidebar';
import { ImageWithDefaultSize } from './ImageWithDefaultSize';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function Card({ products }) {

    // console.log(products);

    const notify = () => toast.error(`O campo quantidade  não pode ser ${quantity}`, {
        position: 'top-center'
    });

    const ArrayProducts = [products]


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



    const [size, setSize] = useState('Pequena');
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        console.log();
        
        setQuantity(parseInt(event.target.value));
        
    };

    const addToCart = (product) => {
        const item = {
            ...product,
            size,
            quantity
        };
        handleBuy(item)

    }

    const openModal = () => {
        console.log(quantity);
        
        if(quantity > 0){
            setModalIsOpen(true);
        }else {
            setQuantity(0)
            notify()
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setQuantity(1)
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

        ArrayProducts.map(product => {

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

                            </div>

                            <div className="flex flex-col py-2 gap-4 text-xl">
                                <div className='flex gap-4 justify-between'>
                                    <label className='text-center flex justify-center items-center font-bold' htmlFor="pizza-size">Tamanho:</label>
                                    <select className='p-2 rounded-md border border-[#B5121B]' id="pizza-size " value={size} onChange={handleSizeChange}>
                                        <option value="pequena">Pequena</option>
                                        <option value="media">Média</option>
                                        <option value="grande">Grande</option>
                                        <option value="familia">Família</option>
                                    </select>
                                </div>
                                <div className='flex gap-4 justify-between'>
                                    <label className='py-2 font-bold' htmlFor="pizza-quantity">Quantidade:</label>
                                    <input
                                        className='w-16 px-2 rounded-md border border-[#B5121B] focus:border-[#B5121B] focus:outline-none focus:ring-2 focus:ring-[#B5121B]'
                                        type="number" placeholder='0' id="pizza-quantity"
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

                    {
                        quantity > 0 ?
                        <>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Enviar o pedido?"
                                    className="w-full fixed inset-0 flex items-center justify-center p-6 bg-opacity-75"
                                    overlayClassName="fixed inset-0 bg-opacity-50"
                                >
                                    <div className="w-full bg-white rounded-lg p-6 max-w-xl mx-auto flex flex-col">
                                        <h2 className="text-2xl font-bold mb-4">📝 Revisar Pedido</h2>
                                        <ol className='flex flex-col p-2'>
                                            <li>✅ Quantidade: {quantity}</li>
                                            <li>✅ Tamanho: {size}</li>
                                            <li>✅ Titulo: {product.title}</li>
                                            <li>✅ Preço: {product.price}</li>
                                        </ol>
                                        <p className="mb-4">Deseja enviar o pedido?</p>
                                        <div className='flex flex-col justify-end sm:flex-row sm:justify-between items-center gap-6 '>
                                            <button onClick={() => (addToCart(product))} className="w-full px-4 py-2 bg-red-500 text-white rounded-full">
                                                Enviar
                                            </button>
                                            <button onClick={closeModal} className="w-full px-4 py-2 bg-red-500 text-white rounded-full">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                </Modal>
                            </>
                            : ""
                            
                            
                            
                    }

                    {
                        quantity == 0 ?
                            <>
                                {/* <div className='fixed inset-0 flex items-center justify-center p-4 bg-opacity-75'> */}
                                <ToastContainer className='mt-24 gap-2 sm:w-1/2 sm:p-4 fixed flex flex-col items-center justify-center' />
                                {/* </div> */}
                            </>
                            : ""
                    }


                </>

            )

        })

    )
}