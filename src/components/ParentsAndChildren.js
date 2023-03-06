import React, { useState } from 'react';
import ParentA from './ParentA';
import ParentB from './ParentB';

function ParentsAndChildren() {

  const [state, setState] = useState({ count: 0 });

  return (
    <div className="ParentsAndChildren">
      <h4>Shared counter</h4>
      <ParentA sharedState={state} setSharedState={setState} />
      <ParentB sharedState={state} setSharedState={setState} />
    </div>
  );

}

export default ParentsAndChildren

