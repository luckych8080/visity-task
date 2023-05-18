import Item from "./Item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../redux/itemSlice";

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row border-b border-gray-300 py-2">
        <h1 className="w-1/3 font-bold text-center">Name</h1>
        <h1 className="w-1/3 font-bold text-center">Email</h1>
        <h1 className="w-1/3 font-bold text-center">Mobile</h1>
        {/* <h1 className="w-1/3 font-bold text-center">Edit</h1>
        <h1 className="w-1/3 font-bold text-center">Delete</h1> */}
      </div>
      {items.map((i) => (
        <Item
          key={i._id}
          id={i._id}
          name={i.name}
          email={i.email}
          mobile={i.mobile}
        />
      ))}
    </>
  );
};

export default ItemList;
