import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useState, useEffect } from 'react';
import "../index.css"

const Pricing = () => {
  const [currentOption, setCurrentOption] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOption((currentOption + 1) % pricingOptions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentOption, pricingOptions.length]);

  return (
    <div id="suscripcion" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        <span className="font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Precios y paquetes
        </span>
      </h2>
      {/* Suscripciones */}
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 p-2 ${index !== currentOption ? 'hidden sm:block' : ''}`}>
            <div className="p-10 border border-borderPrimary rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Premium" && (
                  <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Más Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Mes</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-primary" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-secondary border border-primary rounded-lg transition duration-200"
              >
                Suscribirse
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;