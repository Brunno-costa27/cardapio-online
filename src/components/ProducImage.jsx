import React, { useState } from 'react';
import {Oval} from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Se estiver usando a biblioteca de spinner

const ProductImage = ({ img }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
        setError(true);
    };


    return (
        <>
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <Oval type="TailSpin" color="#fff" height={50} width={50} />
                </div>
            )}
            {!error ? (
                <img
                    src={img}
                    // alt={title}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    className={`transition-opacity duration-500 w-full h-full object-cover rounded-lg ${loading ? 'opacity-0' : 'opacity-100'}`}
                />
            ) : (
                <div className="flex justify-center items-center h-full">
                    <span className='text-center text-[#212121]'>Imagem não carregada</span>
                </div>
            )}
        </>
    );
};

export default ProductImage;
