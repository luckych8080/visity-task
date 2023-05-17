const { Router } = require("express");
const {
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/item");

const router = Router();

router
  .get("/", getItem)
  .post("/", createItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

module.exports = router;
