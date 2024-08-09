import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Button from './Button';
import { Link } from 'react-router-dom';
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from "react-icons/ri";
import { useCart } from '../context/CartContext';
import ProductImage from './ProducImage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductModal = ({ show, onClose, product }) => {
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();
    const [notes, setNotes] = useState('');

    const pizzaFlavors = [
        'FRANGO COM CATUPIRY Molho, frango, catupiry, cebola, tomate, azeitonas e orégano',
        'FRANGO COM CHEDDAR Molho, frango, cheddar, cebola, tomate, azeitonas e orégano',
        'FRANGO COM MUSSARELA Molho, frango, mussarela, cebola, tomate, azeitonas e orégano',
        'FRANGO COM BACON Molho, frango, mussarela, bacon, milho, cebola, tomate, azeitonas e orégano'
    ];

    const handleFlavorChange = (flavor) => {
        if (selectedFlavors.includes(flavor)) {
            setSelectedFlavors(selectedFlavors.filter(item => item !== flavor));
        } else {
            if (selectedFlavors.length < 2) {
                setSelectedFlavors([...selectedFlavors, flavor]);
            } else {
                toast.error('Você pode selecionar no máximo 2 sabores.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }
    };

    if (!show) return null;

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, count, notes });
        onClose();
    };

    const getTotalPrice = () => {
        return product.price * count;
    };

    const isDrink = product.title === 'GUARANÁ ANTARCTICA' || product.title === 'COCA COLA';

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    return (
        <>
        <ToastContainer className="w-[400px]"/>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-roboto">
            <div className="bg-white flex flex-col justify-between rounded-lg overflow-y-auto w-11/12 max-w-4xl h-[70%] lg:h-[80%] min-h-[40%]">
                <div className="flex-1 overflow-y-auto">
                    {/* Cabeçalho */}
                    <div className="p-4 flex justify-between items-center border-b">
                        <h2 className="text-lg sm:text-xl font-semibold text-[#212121]">Detalhes do Produto</h2>
                        <button onClick={onClose} className="text-red-500">
                            <IoClose size={30} />
                        </button>
                    </div>
                    {/* Conteúdo */}
                    <div className="flex flex-col lg:flex-row">
                        {/* imagem */}
                        <div className="lg:w-1/2 p-4 h-[100%]">
                            <ProductImage
                                img={product.img}
                                className="w-full object-cover max-h-60 lg:max-h-96 rounded-md"
                            />
                        </div>
                        {/* Conteúdo interno */}
                        <div className="lg:w-1/2 p-4 overflow-y-auto">
                            <h3 className="text-lg sm:text-xl font-semibold text-[#212121]">{product.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 font-opensans">{product.description}</p>
                            <p className="text-lg sm:text-xl font-bold mt-2 text-[#212121] font-opensans">R$ {product.price}</p>
                            <div className="flex items-center mt-1">
                                <div className="text-xs sm:text-sm bg-green-600 text-white font-medium px-1 py-[2px] rounded-md">-2%</div>
                                <div className="text-xs sm:text-sm text-gray-400 line-through ml-2">R$ 78,96</div>
                            </div>
                            {!isDrink && (
                                // Se não for bebidas não aparece essa seção
                                <div className="mb-4 mt-4 text-[#212121]">
                                    {pizzaFlavors.map(flavor => (
                                        <div key={flavor} className="flex items-center gap-2 py-4 border-b border-gray-300">
                                            <div className='flex-1'>
                                                <label htmlFor={flavor}>{flavor}</label>
                                            </div>
                                            <div className='w-10 flex rounded-full'>
                                                <div
                                                    onClick={() => handleFlavorChange(flavor)}
                                                    className="cursor-pointer w-9 h-9 flex items-center justify-center"
                                                >
                                                    {selectedFlavors.includes(flavor) ? (
                                                        <RiCheckboxCircleFill size={35} className="text-green-600" />
                                                    ) : (
                                                        <RiCheckboxBlankCircleLine size={35} className="text-gray-300" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className='w-full h-full flex mt-4 text-gray-500'>
                                <textarea
                                    className='w-full h-36 px-2 py-4 border rounded-lg focus:outline-none'
                                    placeholder='Alguma observação?'
                                    value={notes}
                                    onChange={handleNotesChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className='flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-300 text-[#212121]'>
                    <div className="flex items-center gap-2 mb-4 sm:mb-0">
                        <Button
                            icon={<AiOutlineMinus />}
                            onClick={handleRemove}
                            label=""
                            disabled={count === 1}
                        />
                        <div className='px-4 py-2 border border-gray-300 rounded-md'>
                            {count}
                        </div>
                        <Button
                            icon={<AiOutlinePlus />}
                            onClick={handleAdd}
                            label=""
                        />
                    </div>
                    <button onClick={handleAddToCart} className="bg-[#D32F2F] text-white px-4 py-2 rounded-md">
                        <Link to='/cart'>R$ {getTotalPrice()} | Adicionar</Link>
                    </button>
                </footer>
            </div>
        </div>
        </>
    );
};

export default ProductModal;
