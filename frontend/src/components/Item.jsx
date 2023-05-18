import { useSelector, useDispatch } from "react-redux";
import { deleteAsync, updateAsync } from "../redux/itemSlice";

const Item = ({ id, name, email, mobile }) => {
  const dispatch = useDispatch();

  // const handleChange = (e, id) =>{
  //   dispatch(updateAsync({id, change:{}}))
  // }

  return (
    <div className="flex flex-row border-b border-gray-300 py-2">
      <h1 className="w-1/3  text-lg font-semibold text-center">{name}</h1>
      <h1 className="w-1/3  text-lg font-semibold text-center">{email}</h1>
      <h1 className="w-1/3  text-lg font-semibold text-center">{mobile}</h1>
      <button className="ml-auto mr-2 px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        ✒️
      </button>
      <button
        className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
        onClick={() => dispatch(deleteAsync(id))}
      >
        🗑️
      </button>
    </div>
  );
};

export default Item;
