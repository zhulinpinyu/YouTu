import React, {Component} from 'react'
import VideoListItem from './video_list_item'

export default class VideoList extends Component {
    render(){
        const videoItems = this.props.videos.map((video,i) => {
            return <VideoListItem key={i} video={video} />
        })

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        )
    }
}