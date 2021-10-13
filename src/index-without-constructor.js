import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

const Page = () => ( 
    <div>
        <CountingParent/>
    </div>
)


class CountingParent extends React.Component { // The constructor is called when a
    // component is created
    constructor(props) {
        super(props);
            // Set the state here. Use "props" if needed.
        this.state = { 
            actionCount: 0
        };
        // Bind the event handler function, so that its // `this` binding isn't lost when it gets passed // to the button
        this.handleAction = this.handleAction.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
    handleAction(action) {
        console.log('Child says', action);
        // Replace actionCount with an incremented value 
        this.setState({
            actionCount: this.state.actionCount + 1 
        });
    }

    handleReset(action) {
        this.setState({
            actionCount: 0
        });
    }

    render() { return (
        <div>
            <Child onAction={this.handleAction}/> <p>Clicked {this.state.actionCount} times</p>
            <Reset onAction={this.handleReset}/> <p> Reseted {this.state.actionCount} </p>
        </div>
        ); 
    }
}    


function Child({ onAction }) { 
    return (
    <button onClick={onAction}> 
        Click Me!
    </button>
); }

function Reset({ onAction }) { 
    return (
    <button onClick={onAction}> 
        Reset
    </button>
); }


ReactDOM.render( 
    <Page/>, 
    document.querySelector('#root')
)

