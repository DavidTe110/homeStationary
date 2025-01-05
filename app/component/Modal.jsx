import Images from "../component/Images";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // Si isOpen es falso, no se muestra nada

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Título de Producto</h2>
          <button
            onClick={onClose}
            className="top-2 right-2 text-xl text-gray-600"
          >
            ❌
          </button>
        </div>

        <div>
          <Images
            images={[
              "https://picsum.photos/400/200?grayscale",
              "https://picsum.photos/seed/picsum/400/200",
              "https://picsum.photos/id/237/400/200",
            ]}
          />
          {/* <img
            className="object-cover border w-full h-full my-2"
            src="https://via.placeholder.com/400x200"
            alt="Imagen de ejemplo"
          /> */}
          <p className="text-rose-500 font-semibold">Categoría - S/00.00</p>
          <p className="mt-4">
            Aquí puedes colocar cualquier contenido,pero con la descripción
            larga, por ejemplo, 2 papeles y x cosas más.
          </p>
          <button className="bg-rose-500  p-2 my-3 rounded text-white transition hover:bg-rose-600">
            Añadir a carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
