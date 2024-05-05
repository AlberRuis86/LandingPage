import { CheckCircle2 } from "lucide-react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { checklistItems } from "../constants";
import { useState, useEffect } from 'react';
import "../index.css"

const Workflow = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImage, images.length]);

  return (
    <div id="servicios" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        <span className="font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Impulsa tu experiencia de belleza
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">

        <div className="relative pt-12 w-full lg:w-1/2">
          <img src={images[currentImage]} alt="Imagen del carrusel" className="w-full h-[500px] object-cover opacity-70 p-4 rounded-3xl" />
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-secondary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

