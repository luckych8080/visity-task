import { useState } from "react";
import { addAsync } from "../redux/itemSlice";
import { useDispatch } from "react-redux";

const AddItem = () => {
  const dispatch = useDispatch();

  const [item, setItem] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAsync(item));
    setItem({});
  };

  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return (
    <form className="max-w-sm mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={item.name || ""}
        maxLength={5}
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="email"
        placeholder="enter email address"
        onChange={handleChange}
        value={item.email || ""}
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="mobile"
        placeholder="Enter your mobile number"
        onChange={handleChange}
        value={item.mobile || ""}
        maxLength={10}
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
