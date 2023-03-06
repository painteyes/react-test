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
      {name: "Jin", id: 1},
      {name: "Kazuya", id: 2},
      {name: "Heihachi", id: 3},
      {name: "Yoshimitsu", id: 4},
    ]
  };
  
  const [state, setState] = useState(initialState);

  return (
    <div className="App">

      <header>
        <h1>Home</h1>
      </header>

      <body>

        <div className='container' style={{display:'flex', justifyContent:'space-between'}}>

        
          <div>
            <h2>Posts</h2>
            {// Versione con arrow function esplicita:
            state.authors.map((author) => {
              // Utilizziamo le parentesi graffe per creare un blocco di codice all'interno della funzione arrow.
              // La parola chiave "return" restituisce l'elemento del Post.
              console.log(author.name)

              return <Post author={author.name} key={author.id} />;
            })}

            {// Versione con sintassi più compatta:
            state.authors.map((author) => (
              // Utilizziamo le parentesi tonde per evitare di dover scrivere la parola chiave "return"
              // La sintassi più compatta rende il codice più leggibile in alcuni casi.
              <Post author={author.name} key={author.id} />
            ))}
          </div>


            <div>
              <h2>Games</h2>
              <Counter/>

              <ParentsAndChildren />

              <List />
            </div>

          

         

        </div>


      </body> 


      

    </div>
  );
}

export default App;

