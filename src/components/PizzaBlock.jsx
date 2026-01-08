import { useState } from "react";

const PizzaBlock = ({ title, price, image, sizes, types }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const nameTypes = ["тонкое", "традиционное"];

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>

      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
            >
              {nameTypes[type]}
            </li>
          ))}
        </ul>

        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price}</div>
        <button className="button button--outline button--add">
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
