import React from "react"


// Class Component
class Counter extends React.Component {
    state = {
        count: 1
    }

    // Not recommended
    // Modifies state directly without using the current state, 
    // which can lead to synchronization issues and inconsistent rendering
    _incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    // Recommended
    // Returns an object that represents the updated state
    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
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