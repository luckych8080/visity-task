import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/";

const AddItem = () => {
  const [item, setItem] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    if (item.name) {
      axios
        .post(baseURL, {
          ...item,
        })
        .then((res) => {
          //   setItems({});
        });
    }
  }

  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={item.name}
        maxLength={5}
      />
      <input
        type="text"
        name="email"
        placeholder="enter email address"
        onChange={handleChange}
        value={item.email}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Enter your mobile number"
        onChange={handleChange}
        value={item.mobile}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddItem;
