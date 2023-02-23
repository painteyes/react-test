// ParentB.jsx
import React, { useState } from 'react';
import ChildB from './ChildB';

function ParentB() {
  const [sharedState, setSharedState] = useState(0);
  return (
    <div>
      <ChildB sharedState={sharedState} />
      <button onClick={() => setSharedState(sharedState + 1)}>Increment sharedState</button>
    </div>
  );
}

export default ParentB;