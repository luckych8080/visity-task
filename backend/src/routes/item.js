const { Router } = require("express");
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItem,
} = require("../controllers/item");

const router = Router();

router
  .get("/", getItems)
  .post("/", createItem)
  .get("/:id", getItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

module.exports = router;
