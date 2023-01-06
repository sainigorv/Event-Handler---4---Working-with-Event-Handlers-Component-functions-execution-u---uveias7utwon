import React from "react";
import "../styles/App.css";
const App = () => {
  function singleClick() {
    console.log("I was not double clicked");
  }

  const handleDoubleClick = (event) => {
    if (event.target.id === "dblclick-btn") console.log("I was double clicked");
  };

  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onClick={singleClick}
        onDoubleClick={(event) => handleDoubleClick(event)}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
