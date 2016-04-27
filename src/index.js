import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const YOUTUBE_API_KEY = "AIzaSyAP46VxAjGPvFhlkfIFFKWtsRipV6yN6XM"

class App extends Component {
    constructor(){
        super()
        this.state = {videos: []}

        YTSearch({key: YOUTUBE_API_KEY, term: "react fundamentals"}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector(".container"))