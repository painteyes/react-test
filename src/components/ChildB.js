// ChildB.jsx
import React from 'react';

function ChildB({ sharedState }) {
  return (
    <div>
      Child B: {sharedState}
    </div>
  );
}

export default ChildB;