import axios from "axios";
import Item from "./Item";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setItems(res.data.Items);
    });
  }, []);

  return (
    <>
      <div className="flex flex-row border-b border-gray-300 py-2">
        <h1 className="w-1/3 font-bold">Name</h1>
        <h1 className="w-1/3 font-bold">Email</h1>
        <h1 className="w-1/3 font-bold">Mobile</h1>
      </div>
      {items.map((item) => (
        <Item
          key={item._id}
          name={item.name}
          email={item.email}
          mobile={item.mobile}
        />
      ))}
    </>
  );
};

export default ItemList;
