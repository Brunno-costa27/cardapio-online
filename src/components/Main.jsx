import React, { useState, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineMenu } from 'react-icons/ai';
import { Card } from './Card';

const Main = ({ products }) => {

  // Separar produtos em categorias
  const pizzas = products.filter(product => product.description.includes('Molho'));
  const bebidas = products.filter(product => !product.description.includes('Molho'));

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [size, setSize] = useState('pequena');
  const [quantity, setQuantity] = useState();
  const [filteredProducts, setFilteredProducts] = useState(pizzas);
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inputRef = useRef(null);

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
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = (activeCategory === 'pizzas' ? pizzas : bebidas).filter((product) => {
      const title = product.title ? product.title.toString() : '';
      return title.toLowerCase().includes(searchValue);
    });

    setFilteredProducts(filteredArray);
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setFilteredProducts(category === 'pizzas' ? pizzas : bebidas);
    setIsMenuOpen(false); // Fechar o menu após a seleção
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className='w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-12 relative font-roboto flex-grow'>
        <div className='sticky top-0 z-10 bg-[#212121] w-full'>
          {/* Hamburger Menu Icon */}
          <button className='lg:hidden text-white mt-2' onClick={toggleMenu}>
            <AiOutlineMenu size={24} />
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden flex flex-col items-center py-4 bg-[#212121] text-white">
              <div
                className={`p-2  cursor-pointer ${activeCategory === 'pizzas' ? 'font-bold text-green-600' : ''}`}
                onClick={() => selectCategory('pizzas')}
              >
                Pizzas
              </div>

              <div
                className={`py-2 cursor-pointer ${activeCategory === 'bebidas' ? 'font-bold text-green-600' : ''}`}
                onClick={() => selectCategory('bebidas')}
              >
                Bebidas
              </div>
            </div>
          )}
          {/* header */}
          {!isMenuOpen && (
           <div className='header w-full px-4 py-4 flex flex-col lg:flex-row lg:justify-between items-center'>
           <div className='flex justify-center lg:justify-start items-center'>
             <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2 lg:py-0 text-center lg:text-left'>🍕 Pizza Shop</h1>
           </div>

           <div className="search mt-4 lg:mt-0 flex justify-between lg:justify-center px-4 items-center w-full lg:w-auto py-2 bg-gray-100 rounded">
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
          )}


          {/* Desktop Menu */}
          <div className="categories hidden lg:flex lg:justify-center lg:space-x-4 xl:space-x-6 2xl:space-x-8 px-2 py-6 lg:py-8 custom-scrollbar">
            <div
              className={`px-4 py-2 md:px-5 md:py-3 rounded-full drop-shadow-xl cursor-pointer ${activeCategory === 'pizzas' ? 'bg-green-600 text-white' : 'bg-white text-[#212121] border'}`}
              onClick={() => selectCategory('pizzas')}
            >
              <p className='text-sm sm:text-base md:text-lg'>Pizzas</p>
            </div>
            <div
              className={`px-4 py-2 md:px-5 md:py-3 rounded-full drop-shadow-xl cursor-pointer ${activeCategory === 'bebidas' ? 'bg-green-600 text-white' : 'bg-white text-[#212121] border'}`}
              onClick={() => selectCategory('bebidas')}
            >
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
  );
};

export default Main;
