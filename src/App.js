import React from 'react';
import Header from "./Header";

function App() {
  console.log(React.version);
  return (
    <div>
      <Header/>
      <button>Add</button>
      <div>
          <span>Name</span><br/>
          <span>Phone</span>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <p>UpGrad - Building Careers of Tomorrow!</p>
//         <App/>
//       </div>
//     );
//   }
// }

export default App;

