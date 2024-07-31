// src/components/ImageGallery.js

import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import ImageUpload from './ImageUpload';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      // Ajuste a URL conforme necessário se você tiver um endpoint para listar as imagens
      const response = await axios.get('https://img-server-f74pbyhav-brunnocosta27s-projects.vercel.app/uploads');
      // Para fins de simplicidade, assumimos que a resposta contém uma lista de nomes de arquivos
      setImages(response.data);
    };

    fetchImages();
  }, []);

  console.log(images)

  return (
    <div>
      {images.length > 0 ? (
      <div>
        {images.map((imageName) => (
          <img
            key={imageName}
            src={`https://img-server-f74pbyhav-brunnocosta27s-projects.vercel.app/uploads/${imageName}`}
            alt={images}
            style={{ width: '200px', margin: '10px' }}
          />
        ))}
      </div>

      ):(
        <div className="spinner-container">
        <Oval
          height={80}
          width={80}
          color="#000000"
          ariaLabel='loading'
        />
      </div>
      )}

      {/* <ImageUpload/> */}
    </div>
  );
};

export default ImageGallery;
