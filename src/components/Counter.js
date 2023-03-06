import React from "react"


// Class Component
class Counter extends React.Component {
    state = {
        count: 1
    }

    // Incorrect way to update state: 
    // directly modifying the state without using the current state 
    // which can lead to synchronization issues and inconsistent rendering
    _incrementCount = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
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
                <span>(with 2 seconds delay)</span>
                <h5>{this.state.count}</h5>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}


export default Counter