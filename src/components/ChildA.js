// ChildA.jsx
import React from 'react';

function ChildA({ sharedState }) {
  return (
    <div>
      Child A: {sharedState}
    </div>
  );
}

export default ChildA;