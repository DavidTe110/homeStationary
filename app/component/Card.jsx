const Card = ({ openModal }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex items-center p-3 border">
      {/* Imagen */}
      <img
        width={80}
        height={90}
        className="object-cover border"
        src="https://via.placeholder.com/80x90"
        alt="Imagen de ejemplo"
      />

      {/* Contenido de la Card */}
      <div className="p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-1">
          Título de la Card
        </h2>
        <span className="text-xs text-gray-500">Categoría</span>
        <span className="mx-2 text-xs text-gray-600">S/00.00</span>
        <p className="text-xs text-gray-600 mb-1">
          Esta es una descripción breve de lo que contiene esta card.
        </p>

        {/* Botón */}
        <button
          className="text-rose-500 text-xs font-semibold"
          type="button"
          onClick={openModal}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};
export default Card;
