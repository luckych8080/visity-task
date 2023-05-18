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
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1  font-bold text-center">Name</div>
        <div className="col-span-2 font-bold text-center">Email</div>
        <div className="col-span-1 font-bold text-center">Mobile</div>
        <div className="col-span-1 font-bold text-center">Edit</div>
        <div className="col-span-1 font-bold text-center">Delete</div>
      </div>

      {items.map((i) => (
        <Item
          key={JSON.stringify(i.name + i.email + i.mobile + i._id)}
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
