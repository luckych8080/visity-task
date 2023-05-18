import { useDispatch } from "react-redux";
import { deleteAsync } from "../redux/itemSlice";

const Item = ({ id, name, email, mobile }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-6 gap-1">
      <div className="col-span-1 bg-gray-200 p-2 rounded-md">{name}</div>
      <div className="col-span-2 bg-gray-200 p-2 rounded-md">{email}</div>
      <div className="col-span-1 bg-gray-200 p-2 rounded-md">{mobile}</div>
      <button className="col-span-1 bg-blue-500 text-white p-2 rounded-md">
        Edit
      </button>
      <button
        className="col-span-1 bg-red-500 text-white p-2 rounded-md"
        onClick={() => dispatch(deleteAsync(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
