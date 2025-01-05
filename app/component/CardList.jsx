import Card from "./Card";
import Modal from "../component/Modal";
import React, { useState } from "react";

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };
  return (
    <div className="p-2">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="my-4">
        <h2 className="my-3 text-5xl text-rose-500 md:mx-4">Promociones</h2>
      </div>
      <h2 className="my-3 font-semibold md:mx-4">Productos disponibles</h2>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-items-center">
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
        <Card openModal={openModal} />
      </div>
    </div>
  );
};
export default CardList;
