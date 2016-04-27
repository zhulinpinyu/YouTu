import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const YOUTUBE_API_KEY = "AIzaSyAP46VxAjGPvFhlkfIFFKWtsRipV6yN6XM"


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("app"))