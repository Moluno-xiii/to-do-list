// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

const ArrayOf = [
  {
    name: "book",
    checked: false,
  },
  {
    name: "frame",
    checked: false,
  },
];

function App() {
  const [item, setItems] = useState([]);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(input);

    const newItems = {
      name: input,
      checked: false,
      id: crypto.randomUUID(),
      isChecked: checked,
    };

    addItems(newItems);

    console.log(newItems);
  };

  // const toggleChecked = () => {
  //   setChecked(!checked);
  // };

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
      />
    </div>
  );
}

const Header = ({ handleChange, setInput, input }) => {
  // const [item , setItems] = useState(ArrayOf)

  return (
    <div className="">
      <h2>New Item</h2>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="input name"
        />
        <button className="submit" onClick={handleChange}>
          Add
        </button>
      </div>
    </div>
  );
};

const Main = ({ item, setItems, toggle, checked }) => {
  const clearList = () => {
    setItems([]);
  };
  return (
    <div className="">
      <h1>Todo List</h1>
      {/* {item.length > 0 ? <p>this item</p> :<p>No items Yet </p>} */}
      {item.map((itemIn, i) => {
        return (
          <ul key={i}>
            <li className={itemIn.checked ? "inline checked" : "inline"}>
              {itemIn.name}{" "}
            </li>{" "}
            <input type="checkbox" className="inline" onChange={() =>toggle(i)} />
          </ul>
        );
      })}
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
