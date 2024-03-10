import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [mode, setMode] = useState(false);

  function handleModeSwitch() {
    if (mode === false) {
      setMode(true)
    } else {
      setMode(false)
    }
  };

  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => handleModeSwitch()}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
