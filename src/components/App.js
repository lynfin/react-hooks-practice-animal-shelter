import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
//
function App() {
  // ┌ └ ─ ├ │
  // App
  //  ├ Filters
  //  └ PetBrowser
  //      └ Pet
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleChangeType = (newFilter) => {
    setFilters(newFilter);
  };

  const handleFindPetsClick = () => {};

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={handleChangeType}
              onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
