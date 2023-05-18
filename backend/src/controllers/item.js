const Item = require("../models/item");

const getItems = async (req, res) => {
  try {
    const Items = await Item.find();
    res.status(200).json({ Items });
  } catch (error) {
    throw error;
  }
};

const getItem = async (req, res) => {
  try {
    const I = await Item.findById(req.params.id);
    res.status(200).json({ I });
  } catch (error) {
    throw error;
  }
};

const createItem = async (req, res) => {
  try {
    await Item.create(req.body);

    res.status(201).json({ message: "Item Added" });
  } catch (error) {
    throw error;
  }
};

const updateItem = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo = await Item.findByIdAndUpdate(id, body);

    res.status(200).json({ message: "Updated Item" });
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (req, res) => {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Item Deleted" });
  } catch (error) {
    throw error;
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
