// ParentA.jsx
import React, { useState, useEffect } from 'react';
import ChildA from './ChildA';

function ParentA({ sharedState, setSharedState }) {
  // Inizializziamo lo stato locale del componente "ParentA" con il valore di "count" passato come proprietà ("props") "sharedState"
  const [count, setCount] = useState(sharedState.count);

  // Utilizziamo la funzione "useEffect" di React per eseguire un'azione ogni volta che il valore di "sharedState" cambia.
  // In questo caso, aggiorniamo lo stato locale del componente "ParentA" in base al nuovo valore dello stato globale "sharedState".
  useEffect(() => {
    setCount(sharedState.count);
  }, [sharedState]);

  // Aggiorniamo lo stato globale passando un oggetto contenente la nuova "count" incrementata di 1.
  const handleIncrement = () => {
    setSharedState({ count: count + 1 });
  };

  return (
    <div>
      {/* Passiamo il valore di "sharedState.count" come proprietà ("props") al componente "ChildA" */}
      <ChildA count={sharedState.count} />
      {/* Aggiungiamo un bottone che, quando viene cliccato, chiama la funzione "handleIncrement" per incrementare lo stato globale */}
      <button onClick={handleIncrement}>Increment sharedState</button>
    </div>
  );
}

export default ParentA;

