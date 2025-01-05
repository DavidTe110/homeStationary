const Menu = () => {
  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="border rounded p-2 w-[500px] shadow mx-auto mb-3 bg-white">
        <button className="p-2 mx-2 transition-transform hover:rotate-3">
          Stickers
        </button>
        <button className="p-2 mx-2 transition-transform hover:rotate-3">
          Packs
        </button>
        <button className="p-2 mx-2 transition-transform hover:rotate-3">
          Promociones
        </button>
        <button className="p-2 mx-2 transition-transform hover:rotate-3">
          Fotografías
        </button>
        <button className="p-2 mx-2 transition-transform hover:rotate-3">
          Kits
        </button>
      </div>
    </div>
  );
};
export default Menu;
