import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

const Page = () => ( 
    <div>
        <CountingParent/>
        <CountingParent/>
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
    }
    handleAction(action) {
        console.log('Child says', action);
        // Replace actionCount with an incremented value this.setState({
        this.setState = this.state.actionCount + 1 
    };

    render() { return (
        <div>
            <Child onAction={this.handleAction}/> <p>Clicked {this.state.actionCount} times</p>
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


ReactDOM.render( 
    <Page/>, 
    document.querySelector('#root')
)

