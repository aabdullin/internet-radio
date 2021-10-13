import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

const Page = () => ( 
    <div>
        <House/>
    </div>
)


class House extends React.Component {
    state = {
        kitchen: true, 
    }
    handleAction = (action) => {
        console.log('Child says', action);
        this.setState({
            kitchen: !this.state.kitchen
        });
    }
    render() { 
        return (
            <div>
                <Kitchen onAction={this.handleAction}/> 
                <p> State: {this.state.kitchen} </p>
            </div>
        ); 
    }
}


function Kitchen({ onAction }) { 
    return (
    <button onClick={onAction}> 
        Kitchen
    </button>
); }

function Bathroom({ onAction }) { 
    return (
    <button onClick={onAction}> 
        Bathroom
    </button>
); }

function LivingRoom({ onAction }) { 
    return (
    <button onClick={onAction}> 
        LivingRoom
    </button>
); }

function Bedroom({ onAction }) { 
    return (
    <button onClick={onAction}> 
        Bedroom
    </button>
); }


ReactDOM.render( 
    <Page/>, 
    document.querySelector('#root')
)


