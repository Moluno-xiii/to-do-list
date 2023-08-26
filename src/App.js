// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";


function App() {
  const [item, setItems] = useState([]);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  const handleDelete = (index) => {
    const updatedItems = [...item]
    updatedItems.splice(index,  1)
    setItems(updatedItems)

  }

  const handleChange = (e) => {
    if (!input) return;
    e.preventDefault();
    setInput("");
    // console.log(input);

    const newItems = {
      name: input,
      checked: false,
      id: crypto.randomUUID(),
      isChecked: checked,
    };

    addItems(newItems);

    // console.log(newItems);
  };



  const toggleChecked = (index) => {
    const updatedItems = [...item];
    updatedItems[index].checked = !updatedItems[index].checked;

    setItems(updatedItems);
  };

  const addItems = (newItem) => {
    setItems([...item, newItem]);
  };

  return (
    <div className="App">
      <Header
        addItems={addItems}
        checked={checked}
        input={input}
        setInput={setInput}
        handleChange={handleChange}
      />
      <Main
        item={item}
        setItems={setItems}
        toggle={toggleChecked}
        checked={checked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

const Header = ({ handleChange, setInput, input }) => {


  return (
    <div className="">
      <h2>New Item</h2>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="input name"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleChange(event);
            }
          }}
        />
        <button className="submit" onClick={handleChange}>
          Add
        </button>
      </div>
    </div>
  );
};

const Main = ({ item, setItems, toggle, checked, handleDelete }) => {
  const clearList = () => {
    setItems([]);
  };
  return (
    <div className="text-field">
      <h1>Todo List</h1>
      {item.length <= 0 ? (
        <p>No items Yet </p>
      ) : (
        item.map((itemIn, i) => {
          return (
            <ul key={i}>
              <input
                type="checkbox"
                className="inline"
                onChange={() => toggle(i)}
              />
              <li className={itemIn.checked ? "inline checked" : "inline"}>
                {itemIn.name}
              </li>{" "}
              <button className="inline" onClick={handleDelete}>delete</button>
            </ul>
          );
        })
      )}

      <button className="clear" onClick={clearList}>
        Clear All
      </button>
    </div>
  );
};

// const item1 = () => {
//   return <div className=""></div>;
// };

export default App;
