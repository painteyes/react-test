import './App.css';
import Button from './components/Button';
import Post from './components/Post';
import Counter from './components/Counter';
import ParentsAndChildren from './components/ParentsAndChildren';
import List from './components/List';


import React, { useState } from 'react';

/* Alternative syntax
const app = () => {
*/
function App() {

  const initialState = {
    authors: [
      <Post author="Jin" key="1" />,
      <Post author="Kazuya" key="2" />,
      <Post author="Heihachi" key="3" />,
      <Post author="Yoshimitsu" key="4" />,
    ]
  };
  
  const [state, setState] = useState(initialState);

  return (
    <div className="App">

      <header>
        <h1>Home</h1>
      </header>
      <body>

      {// Versione con arrow function esplicita:
      state.authors.map((author) => {
        // Utilizziamo le parentesi graffe per creare un blocco di codice all'interno della funzione arrow.
        // La parola chiave "return" restituisce l'elemento del Post.
        return <Post author={author.name} key={author.id} />;
      })}

      {// Versione con sintassi più compatta:
      state.authors.map((author) => (
        // Utilizziamo le parentesi tonde per evitare di dover scrivere la parola chiave "return"
        // La sintassi più compatta rende il codice più leggibile in alcuni casi.
        <Post author={author.name} key={author.id} />
      ))}
      
      </body> 

      <Counter/>

      <ParentsAndChildren />

      <List />

    </div>
  );
}

export default App;

