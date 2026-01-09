import React, { useState } from "react";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ["популярности", "цене", "алфавиту"];

  return (
    <div className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6">
          <path d="M10 5L5 0L0 5Z" fill="#2C2C2C" />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>
          {list[selected]}
        </span>
      </div>

      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((name, index) => (
              <li
                key={name}
                className={selected === index ? "active" : ""}
                onClick={() => {
                  setSelected(index);
                  setOpen(false);
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
