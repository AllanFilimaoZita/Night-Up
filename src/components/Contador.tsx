function Contador() {
  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      
      <button className="px-3 py-1 bg-white ">
        -
      </button>

      <span className="px-4 bg-gray-200">0</span>

      <button className="px-3 py-1 bg-white">
        +
      </button>

    </div>
  );
}

export default Contador;