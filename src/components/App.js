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
  const [filters, setFilters] = useState("all");

  const handleChangeType = (newFilter) => {
    setFilters(newFilter);
  };

  const handleFindPetsClick = () => {
    let fetchString;
    if (filters === "all") {
      fetchString = "http://localhost:3001/pets";
    } else {
      fetchString = `http://localhost:3001/pets/?type=${filters}`;
    }

    fetch(fetchString)
      .then((r) => r.json())
      .then((pets) => setPets(pets));
  };

  const handleAdoptPet = (id) => {
    setPets(
      pets.map((pet) => (pet.id === id ? { ...pet, isAdopted: true } : pet))
    );
  };
  console.log(pets);
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
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
