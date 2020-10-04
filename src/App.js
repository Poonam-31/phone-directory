import React from 'react';
import Header from "./Header"

function App() {
  console.log(React.version);
  return (
    <div>
      <Header/>
      <button> Add </button>
      <div>
          <span>Name </span><br/>
          <span>Phone </span>
      </div>
    </div>
  );
}

export default App;

