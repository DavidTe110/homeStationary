import React, { useState } from "react";

const Header = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 flex justify-between items-center bg-rose-300 text-white fixed w-full">
      {/* Logo o Título */}
      <div>
        <h1 className="text-lg md:text-2xl">Home Sta...</h1>
      </div>

      {/* Icono de Menú Hamburguesa para pantallas pequeñas */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Menú para pantallas grandes */}
      <div className="hidden md:flex flex-wrap items-center">
        <ol className="flex">
          <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
            Panel de control
          </li>
          <li className="mx-2 cursor-pointer text-sm md:text-base">
            <button className="p-2 focus:outline-none py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              🛒(0)
            </button>
          </li>
        </ol>
      </div>

      {/* Menú Desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-rose-300 text-white">
          <ol className="flex flex-col p-4">
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Panel de control
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Stickers
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Packs
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Promociones
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Fotografías
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Kits
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
              Papelería
            </li>
            <li className="py-2 cursor-pointer text-sm md:text-base ">
              <button className="p-2 focus:outline-none py-2 cursor-pointer text-sm md:text-base transition-transform hover:rotate-3">
                🛒(0)
              </button>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Header;
