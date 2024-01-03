import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  let foodItem = ["vegitable", "Roti", "Salad", "Dal", "Milk", "ghi"];
  return (
    <React.Fragment>
      <div>Helthy food </div>
      {foodItem.length===0 ? <h3> No food Item here</h3>: null}
      <ul className="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
