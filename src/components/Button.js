import React from 'react';

// JSX
function Button() {

    // Methods

   
    print = () => {
        console.log("Hella")
    }

    function print() {
        console.log("Hello")
    }


    return (

        <div>
            <button onClick={print}>Print</button>
        </div>


    )
}

export default Button