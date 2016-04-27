import React, {Component} from 'react'

export default class VideoDetail extends Component{
    render(){
        const {video} = this.props
        const {videoId} = video.id
        const url = `https://www.youtube.com/embed/${videoId}`
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        )
    }
}