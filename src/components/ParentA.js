// ParentA.jsx
import React, { useState } from 'react';
import ChildA from './ChildA';

function ParentA() {
  const [sharedState, setSharedState] = useState(0);
  return (
    <div>
      <ChildA sharedState={sharedState} />
      <button onClick={() => setSharedState(sharedState + 1)}>Increment sharedState</button>
    </div>
  );
}

export default ParentA;
