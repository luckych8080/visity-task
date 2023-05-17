

const Item = ({ name, email, mobile }) => {
  return (
    <div className="flex flex-row border-b border-gray-300 py-2">
      <h1 className="w-1/3">{name}</h1>
      <h1 className="w-1/3">{email}</h1>
      <h1 className="w-1/3">{mobile}</h1>
      <button>✒️</button>
      <button>🗑️</button>
    </div>
  );
};

export default Item;
