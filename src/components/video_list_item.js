import React,{Component} from 'react'

export default class VideoListItem extends Component{
    render(){
        return (
            <li>{this.props.video.id.videoId}</li>
        )
    }
}