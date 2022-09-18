import React from "react";

function Menubar() {
  let style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "Black",
    color: "white",
    fontSize: "2rem",
  };

  return (
    <div style={style}>
      <div>
        <ul>
          <li>
            <a href="https://google.com"> בית</a>
          </li>
          <li>אודות</li>
          <li>פרוייקטים</li>
          <li>צור קשר</li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
