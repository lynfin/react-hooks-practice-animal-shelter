import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { gender, type, age, weight, name, isAdopted, id } = pet;
  const disabledClass = "ui disabled button";
  const enabledClass = "ui primary button";

  const handleClick = (e) => {
    onAdoptPet(id);
  };

  const buttonDisplay = () => {
    if (isAdopted) {
      return <button className="ui primary button">Already adopted</button>;
    } else {
      return (
        <button className="ui disabled button" onClick={handleClick}>
          Adopt pet
        </button>
      );
    }
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ? " ♀ " : " ♂ "}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">{buttonDisplay()}</div>
    </div>
  );
}

export default Pet;
