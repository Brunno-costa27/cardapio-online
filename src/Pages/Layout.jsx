import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'



const Layout = () => {

    const { cart } = useCart()

    const cartItemCount = cart.length

    return (
        <div className='font-sans min-h-screen flex flex-col'>
            {/* Main content area */}
            <div className='flex-grow'>
                <Outlet />
            </div>

            {/* Footer */}
            <footer className='w-full p-8 flex justify-center items-center text-white text-xl'>
                <p>© 2024 - Brunno Costa</p>
            </footer>

            {/* Ícone do carrinho de compras */}
            {cartItemCount > 0  && (
                <div className='fixed bottom-4 right-6 flex justify-center items-center bg-transparent rounded-full'>
                    <Link to="/cart">
                        <div className='relative'>
                            <FaShoppingCart className='w-full h-full text-white p-6  fill-[#FFC107] cursor-pointer' size={50} />
                            <span className='absolute top-4 right-3 bg-[#D32F2F] text-white rounded-full px-2 py-1 text-xs'>
                                {cartItemCount}
                            </span>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Layout;
