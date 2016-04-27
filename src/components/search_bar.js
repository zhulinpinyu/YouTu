import React,{Component} from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ""}
    }

    render(){
        return (
            <div>
                Search: <input onChange={ e => this.setState({term: e.target.value}) }/>
                Value: {this.state.term}
            </div>
        )
    }
}