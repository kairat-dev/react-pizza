import React, { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={active === index ? "active" : " "}
          >{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
