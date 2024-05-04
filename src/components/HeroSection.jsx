import React from 'react';
import "../index.css";
import cosmeticanaturalImage from '../assets/cosmeticanatural.jpg';

const HeroSection = () => {
  return (
    <div id='heroesection' className="flex flex-col items-center mt-20 p-6" style={{backgroundImage: `url(${cosmeticanaturalImage})`, backdropFilter: 'blur(5px)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Descubre la Belleza con
        <span className="font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {" "}
          CosméticaNatural
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white-500 max-w-4xl">
        ¡Potencia tu belleza natural con CosméticaNatural! Descubre una amplia
        gama de productos naturales y orgánicos diseñados para realzar tu
        belleza de manera saludable y sostenible.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-primary to-secondary py-3 px-4 mx-3 rounded-md btn-prev"
        >
          Comienza tu Transformación
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border btn-next hover:bg-secondary border border-borderPrimary rounded-lg transition duration-200">
          Explora nuestros Productos
        </a>
      </div>
    </div>
  );
};

export default HeroSection;