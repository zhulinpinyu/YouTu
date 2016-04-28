import React,{Component} from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ""}
    }

    onInputChange(e){
        const term = e.target.value
        this.setState({term})
        this.props.onSearchTermChange(term)
    }

    render(){
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={ this.onInputChange.bind(this)}/>
            </div>
        )
    }
}