import axios from "axios";

export function fetchItems() {
  return axios.get("http://localhost:8080/");
}

export function fetchItem(id) {
  return axios.get(`http://localhost:8080/${id}`);
}

export function addItem(item) {
  return axios.post("http://localhost:8080/", item);
}

export function updateItem(id, item) {
  return axios.put(`http://localhost:8080/${id}`, item);
}

export function deleteItem(id) {
  return axios.delete(`http://localhost:8080/${id}`);
}
