import React, { useState } from 'react';
// import ParentA from './ParentA';
// import ParentB from './ParentB';

// function App() {
  
//     return (
//       <div>
//         <ParentA />
//         <ParentB />
//       </div>
//     );
//   }
  
//   export default App;


const ParentA = () => {
  const [sharedState, setSharedState] = useState({ count: 0 });

  const handleIncrement = () => {
    setSharedState({ count: sharedState.count + 1 });
  };

  return (
    <div>
      <h2>Parent A</h2>
      <Child sharedState={sharedState} handleIncrement={handleIncrement} />
    </div>
  );
};

const ParentB = () => {
  const [sharedState, setSharedState] = useState({ count: 0 });

  const handleIncrement = () => {
    setSharedState({ count: sharedState.count + 1 });
  };

  return (
    <div>
      <h2>Parent B</h2>
      <Child sharedState={sharedState} handleIncrement={handleIncrement} />
    </div>
  );
};

const Child = ({ sharedState, handleIncrement }) => {
  return (
    <div>
      <h3>Child</h3>
      <p>Count: {sharedState.count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ParentA />
      <ParentB />
    </div>
  );
}