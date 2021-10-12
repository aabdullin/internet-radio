import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

function Header() {
    <div className="header"> new | threads | comments | show | ask | jobs | submit </div>
} 

function Thread () {
    
}


function ThreadList ( {files} ) {
    return (
        
        <div className="list_of_threads">
                {files.map ( file => (
                    <div className="thread-list-item" key={file.id}> 
                        <div className="title"> 
                            <div className="thread-list-id"> {file.id}. </div>
                            <div className="thread-list-title"> {file.title} </div>
                            <div className="thread-list-url"> ({file.url}) </div>
                        </div>
                        <div className="meta-data">
                            {file.points} points by {file.author} {file.time} hours ago | flag | hide | {file.comments} | instapaper | save to pocket
                        </div>
                    </div>
                ))}
        </div>
    )
}
                 

ThreadList.propTypes = {
    files: PropTypes.array
}


const testCards = [ 
    {
        id: 1,
        title: `Why I'm Suing the US government`,
        url: 'bunniestudios.com',
        points: '1346',
        author: 'ivank',
        time: '11',
        comments: '257'
    },
    {
        id: 2,
        title: `Zenzizen`,
        url: 'wikipedia.org',
        points: '140',
        author: 'vinchuco',
        time: '4',
        comments: '40'
    },
    {
        id: 3,
        title: `Abc`,
        url: 'facebook.com',
        points: '140',
        author: 'chu',
        time: '2',
        comments: '21'
    },
    {
        id: 4,
        title: `Abc`,
        url: 'facebook.com',
        points: '140',
        author: 'chu',
        time: '2',
        comments: '21'
    }
];



ReactDOM.render( 
    <ThreadList files={testCards}/>, 
    document.querySelector('#root')
)

