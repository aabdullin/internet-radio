import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

<<<<<<< Updated upstream

function Title ( {testFile} ) {
    return (
        <div className="genre">
            {testFile}
        </div>
    )
=======
const Page = () => ( 
    <div>
        <CountingParent/>
    </div>
)


class CountingParent extends React.Component {
    // initialize state with a property initializer // you can access this.props if needed
    state = {
        kitchen: true, 
        bathroom: false, 
        livingRoom: true, 
        bedroom: false
    }
    // writing the handler as an arrow function // means it will retain the proper value of // `this`, so we can avoid having to bind it 
    handleAction = (action) => {
        console.log('Child says', action);
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }
    render() { 
        return (
            <div>
                <Kitchen onAction={this.handleAction}/> 
                <Bathroom onAction={this.handleAction}/> 
                <LivingRoom onAction={this.handleAction}/> 
                <Bedroom onAction={this.handleAction}/> 
            </div>
        ); 
    }
>>>>>>> Stashed changes
}

Title.propTypes = {
    card: PropTypes.object.isRequired
}

<<<<<<< Updated upstream
function RadioStationList ( {testFiles} ) {
    return (
        <div className="internet_radio">
                <div className="title"> </div>
                <div className="list_of_stations">
                    {testFiles.map ( (genre, index) => {
                        console.log (genre, index)
                        let size = 'btn-xs';
                        if (index < 10) {
                          size = 'btn-lg'
                        } else if (index < 30) {
                          size = 'btn-md'
                        }
                        return <button className={`${size}`} key={index}> {genre} </button>
                })}
                </div>
        </div>
    )
}
                 
RadioStationList.propTypes = {
    testFiles: PropTypes.array
}


const testGenres = ["Jazz", "Top 40", "Country", "Blues", "Easy Listening", "Rock", "Classical", "80s", "Chillout", "Oldies", "Dance", "Trance", "Reggae", "Ambient", "Hip Hop", "Smooth Jazz", "70s", "House", "Lounge", "Metal", "Drum And Bass", "Meditation", "Techno", "Heavy Metal", "Soul", "60s", "Pop", "Psytrance", "Bollywood", "90s", "Latin", "50s", "Funk", "Rap", "Rockabilly", "Hindi", "Greek", "Minimal", "Comedy", "Alternative", "Bluegrass", "New Age", "Edm", "Manele", "Reggaeton", "Salsa", "Swing", "Disco", "Japanese", "Classic Rock", "Chill", "Electronic", "Dancehall", "Talk", "Rnb", "Psychedelic", "Dub", "Dubstep", "Progressive", "Hardstyle", "Romantic", "Indie", "Goa", "Eurodance", "Kizomba", "Folk", "Hardcore", "Celtic", "Americana", "New Wave", "Goth", "Electro", "Soundtracks", "Jungle", "Jewish", "Opera", "Indian", "Punk", "Downtempo", "Garage"];
=======
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
>>>>>>> Stashed changes


ReactDOM.render( 
    <RadioStationList testFiles={testGenres}/>, 
    document.querySelector('#root')
)


