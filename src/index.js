//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>This is an unordered list</h1>
    <ul>
      <li>list 1</li>
      <li>list 2</li>
      <li>list 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
