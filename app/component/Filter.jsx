const Filter = () => {
  return (
    <div className="p-6 flex flex-col items-center text-white">
      {/* Campo de búsqueda */}
      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 rounded border-2 border-rose-500 focus:outline-none focus:border-rose-700 transition"
        />
      </div>
    </div>
  );
};
export default Filter;
