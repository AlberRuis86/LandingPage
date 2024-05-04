import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a className="text-xl tracking-tight italic text-primary font-bold" href="#heroesection">CosméticaNatural</a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-primary" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:bg-secondary border border-borderPrimary rounded-lg transition duration-200">
              Iniciar sesión
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-primary to-secondary py-2 px-3 rounded-md"
            >
              Registrate
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Iniciar sesión
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-primary to-secondary"
              >
                Crear cuenta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
