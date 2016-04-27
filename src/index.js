import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const YOUTUBE_API_KEY = "AIzaSyAP46VxAjGPvFhlkfIFFKWtsRipV6yN6XM"



class App extends Component {
    constructor(){
        super()
        this.state = {videos: []}

        YTSearch({key: YOUTUBE_API_KEY, term: "React"}, (videos) => {
            this.setState({videos: videos})
        })
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("app"))