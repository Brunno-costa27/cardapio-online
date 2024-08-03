import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cartitems = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalItens = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.count * item.price, 0).toFixed(2);
  };

  console.log(cart);

  return (
    <div className="font-roboto">
      <div className="w-full max-w-screen-lg m-auto py-10 px-4 lg:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Carrinho de compras</h1>
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Existem {getTotalItens()} itens no seu carrinho
        </p>
        <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0 lg:space-x-10 mt-10">
          <div className="w-full lg:w-[60%] space-y-3">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b hidden sm:table-header-group">
                  <tr>
                    <th className="text-gray-400 py-2 text-left">Produto</th>
                    <th className="text-gray-400 py-2 text-center">Preço</th>
                    <th className="text-gray-400 py-2 text-center">Quantidade</th>
                    <th className="text-gray-400 py-2 text-center">Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="w-full flex justify-center items-center p-4">
                        <p className="text-lg sm:text-2xl text-[#616161] text-center">
                          Seu carrinho está vazio.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    cart.map((item, index) => (
                      <tr
                        key={index}
                        className="border-dashed border-b flex flex-col sm:table-row"
                      >
                        <td className="w-full sm:w-[60%] py-5 flex flex-col sm:table-cell">
                          <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 py-2">
                            <img
                              src={item.img}
                              alt="Produto"
                              className="w-24 h-24 sm:w-[100px] sm:h-[100px] bg-white rounded object-cover"
                            />
                            <div className="mt-3 sm:mt-0">
                              <h1 className="text-lg sm:text-xl font-bold">{item.title}</h1>
                              <p className="text-xs sm:text-sm text-[#616161]">{item.description}</p>
                            </div>
                          </div>
                        </td>

                        <td className="flex justify-between mt-2 sm:mt-0 sm:table-cell px-2">
                          <p className='sm:hidden'>Preço:</p>
                          R$ {item.price}
                        </td>
                        <td className="text-center mt-2 sm:mt-0 sm:table-cell">
                          <div className="w-full flex justify-between items-center px-2">
                            <p className='sm:hidden'>Quantidade:</p>
                            <p>{item.count}</p>
                          </div>
                        </td>
                        <td className="flex justify-between items-center mt-2 sm:mt-0 sm:table-cell">

                          <button
                            onClick={() => removeFromCart(item.title)}
                            className="w-full flex items-center justify-between px-2 mb-2"
                          >
                        <p className='sm:hidden'>Remover:</p>

                            <AiFillDelete className="text-[#D32F2F]" size={"1.5rem"} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="my-5">
              <Link to="/">
                <button className="flex items-center space-x-3 bg-[#D32F2F] font-semibold rounded p-4 hover:opacity-95 text-white">
                  <BsArrowLeft />
                  <span>Continue Comprando</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[40%] h-fit rounded space-y-5">
            <div className="flex justify-between items-center border-b border-dashed p-2">
              <h1 className="text-lg sm:text-xl">Total</h1>
              <p>R$ {getTotalPrice()}</p>
            </div>
            <div className="flex justify-between items-center border-b border-dashed p-2">
              <h1 className="text-lg sm:text-xl">Descontos</h1>
              <p>R$ 0,00</p>
            </div>
            <div className="flex justify-between items-center border-b p-2">
              <h1 className="text-lg sm:text-xl">Total a pagar</h1>
              <p>R$ {getTotalPrice()}</p>
            </div>
            <button className="w-full font-bold p-4 bg-[#D32F2F] text-center text-white rounded">
              Confirmar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cartitems;
