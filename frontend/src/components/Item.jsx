import { useDispatch } from "react-redux";
import { deleteAsync, updateAsync } from "../redux/itemSlice";
import { useState } from "react";

const Item = ({ id, name, email, mobile }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [item, setItem] = useState({ name, email, mobile });

  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateAsync({ id, item }));
    setEditMode(false);
  }

  return (
    <div className="grid grid-cols-6 gap-1">
      {editMode ? (
        <>
          <input
            type="text"
            name="name"
            value={item.name}
            maxLength={5}
            onChange={handleChange}
            className="col-span-1 bg-gray-200 p-2 rounded-md"
          />
          <input
            type="text"
            name="email"
            value={item.email}
            onChange={handleChange}
            className="col-span-2 bg-gray-200 p-2 rounded-md"
          />
          <input
            type="text"
            name="mobile"
            value={item.mobile}
            onChange={handleChange}
            maxLength={10}
            className="col-span-1 bg-gray-200 p-2 rounded-md"
          />
        </>
      ) : (
        <>
          <div className="col-span-1 bg-gray-200 p-2 rounded-md">{name}</div>
          <div className="col-span-2 bg-gray-200 p-2 rounded-md">{email}</div>
          <div className="col-span-1 bg-gray-200 p-2 rounded-md">{mobile}</div>
        </>
      )}
      {editMode ? (
        <button
          className="col-span-1 bg-green-500 text-white p-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <>
          <button
            className="col-span-1 bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
          <button
            className="col-span-1 bg-red-500 text-white p-2 rounded-md"
            onClick={() => dispatch(deleteAsync(id))}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );

  // return (
  //   // <div className="grid grid-cols-6 gap-1">
  //   //   <div className="col-span-1 bg-gray-200 p-2 rounded-md">{name}</div>
  //   //   <div className="col-span-2 bg-gray-200 p-2 rounded-md">{email}</div>
  //   //   <div className="col-span-1 bg-gray-200 p-2 rounded-md">{mobile}</div>
  //   //   <button className="col-span-1 bg-blue-500 text-white p-2 rounded-md">
  //   //     Edit
  //   //   </button>
  //   //   <button
  //   //     className="col-span-1 bg-red-500 text-white p-2 rounded-md"
  //   //     onClick={() => dispatch(deleteAsync(id))}
  //   //   >
  //   //     Delete
  //   //   </button>
  //   // </div>
  // );
};

export default Item;
