import React, {Component} from 'react'

export default class VideoList extends Component {
    render(){
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.length}
            </ul>
        )
    }
}