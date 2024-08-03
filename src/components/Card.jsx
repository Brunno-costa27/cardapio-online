import React, { useState, useRef, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoAdd } from "react-icons/io5";
import Sidebar from './Sidebar';
import { ImageWithDefaultSize } from './ImageWithDefaultSize';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import ProductImage from './ProducImage';
import ProductModal from './ProducModal';


export function Card({ products }) {


    const notify = () => toast.error(`O campo quantidade  não pode ser ${quantity}`, {
        position: 'top-center'
    });

    const ArrayProducts = [products]


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    // const [images, setImages] = useState([]);


    // useEffect(() => {
    //     const fetchImages = async () => {
    //         // Ajuste a URL conforme necessário se você tiver um endpoint para listar as imagens
    //         const response = await axios.get('http://localhost:3001/uploads');
    //         // Para fins de simplicidade, assumimos que a resposta contém uma lista de nomes de arquivos
    //         console.log()
    //         setImages(response.data);
    //     };

    //     fetchImages();
    // }, []);



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

        if (quantity > 0) {
            setModalIsOpen(true);
        } else {
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
            <div className="w-full flex justify-between items-center p-4 bg-[#F5F5F5] shadow-md rounded-lg relative border border-[#E0E0E0]">
                {/* Descrição */}
                <div className="flex-1">
                    <div className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold font-raleway text-[#212121] tracking-tighter">{product.title}</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-opensans">{product.description}</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mt-2 font-opensans text-[#212121]">R$ {product.price},00</div>
                    {/* static */}
                    <div className="flex items-center mt-1">
                        <div className="text-xs sm:text-sm  bg-green-600 text-white font-medium px-1 py-[2px]  rounded-md">-2%</div>
                        <div className="text-xs sm:text-sm  text-gray-400 line-through ml-2">R$ 78,96</div>
                    </div>
                </div>
                {/* Imagem */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 ml-0 sm:ml-4 relative">
                    <ProductImage
                        img={product.img} 
                    />
                </div>
                {/* Ícone */}
                <div
                    onClick={handleOpenModal}
                    className="absolute bottom-2 right-2  bg-[#FFC107] text-white cursor-pointer rounded-full p-1 sm:p-2">
                    <IoAdd size={24} />
                </div>

                 {/* Modal */}
                <ProductModal show={showModal} onClose={handleCloseModal} product={products} /> 
            </div>
        </>

        )

        })

    )
}