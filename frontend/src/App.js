import AddItem from "./components/AddItem.jsx";
import ItemList from "./components/ItemList.jsx";

function App() {
  return (
    <div className="max-w-full mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Web Form</h1>
      <AddItem />
      <h1 className="text-3xl font-bold underline mb-4">List</h1>
      <ItemList />
    </div>
  );
}

export default App;
