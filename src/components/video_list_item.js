import React,{Component} from 'react'

export default class VideoListItem extends Component{
    render(){
        return (
            <li>VideoId: {this.props.video.id.videoId}</li>
        )
    }
}