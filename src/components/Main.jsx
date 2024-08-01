import React, { useState, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Card } from './Card';


const Main = ({ products }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [size, setSize] = useState('pequena');
    const [quantity, setQuantity] = useState();
    // const [title, setTitle] = useState("");

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value);
    // };

    // handleBuy(product)
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const addToCart = (product) => {
        const item = {
            ...product,
        };
        // handleBuy(item)
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
            <main className='w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-12 relative font-roboto flex-grow'>
                <div className='sticky top-0 z-10 bg-[#212121] w-full'>
                    {/* header */}
                    <div className='header w-full px-4 py-4 flex flex-col lg:flex-row lg:justify-between items-center'>
                        <div className='flex justify-center lg:justify-start items-center'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2 lg:py-0 text-center lg:text-left'>🍕 Pizza Shop</h1>
                        </div>
                        <div className="search mt-4 lg:mt-0 flex justify-center lg:justify-end items-center px-4 py-2 bg-gray-100 rounded">
                            <input
                                type="text"
                                placeholder='Pesquisar produto'
                                className='md:w-auto bg-transparent outline-none text-[#212121] px-2 py-1'
                                onChange={searchHandler}
                                ref={inputRef}
                            />
                            <button className='ml-2 text-[#212121]' onClick={() => searchHandler()}>
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                    <div className="categories hidden sm:flex sm:justify-center lg:justify-center lg:space-x-4 xl:space-x-6 2xl:space-x-8 px-2 py-6 lg:py-8 custom-scrollbar">
                        <div className='bg-green-600 text-white px-4 py-2 md:px-5 md:py-3 rounded-full drop-shadow-xl hover:opacity-95 cursor-pointer'>
                            <p className='text-sm sm:text-base md:text-lg'>Pizzas</p>
                        </div>
                        <div className='bg-white border px-4 py-2 md:px-5 md:py-3 text-[#212121] rounded-full drop-shadow-xl cursor-pointer'>
                            <p className='text-sm sm:text-base md:text-lg'>Bebidas</p>
                        </div>
                    </div>
                </div>
                {/* Cards */}
                {filteredProducts?.length ? (
                    <>
                        <div className="products grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 p-4 md:p-6 lg:p-8">
                            {filteredProducts.map((product, index) => (
                                <Card key={index} products={product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='w-full min-h-screen flex justify-center items-center font-semibold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white'>
                        <h1>Nenhum item encontrado 😢</h1>
                    </div>
                )}
            </main>
        </>
    )
}

export default Main