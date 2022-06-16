import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { gender, type, age, weight, name, isAdopted, id } = pet;
  const disabledClass = "ui disabled button";
  const enabledClass = "ui primary button";

  const handleClick = (e) => {
    onAdoptPet(id);
  };
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
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
      <div className="extra content">
        <button className={isAdopted ? enabledClass : disabledClass}>
          Already adopted
        </button>
        <button
          className={isAdopted ? disabledClass : enabledClass}
          onClick={handleClick}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
