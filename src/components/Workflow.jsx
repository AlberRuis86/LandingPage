import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/imagen.jpg";
import { checklistItems } from "../constants";
import "../index.css"

const Workflow = () => {
  return (
    <div id="servicios" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
      <span className="font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        Impulsa tu experiencia de belleza
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 object-cover opacity-80">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-secondary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
