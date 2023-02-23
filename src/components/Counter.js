import React from "react"


// Class Component
class Counter extends React.Component {
    state = {
        count: 1
    }

    // Incorrect way to update state: 
    // directly modifying the state without using the current state 
    // which can lead to synchronization issues and inconsistent rendering
    _incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    // Recommended
    // Returns an object that represents the updated state
    incrementCount = () => {
        setTimeout(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }, 2000);
    };

    render() {
        return (
            <div className="Counter">
                <h4>Counter</h4>
                <h3>{this.state.count}</h3>
                <button onClick={this.incrementCount}>+1</button>
            </div>
        )
    }
}


export default Counter