import React,{Component} from 'react'

export default class SearchBar extends Component {
    render(){
        return (
            <div>
                Search: <input onChange={ e => console.log(e.target.value) }/>
            </div>
        )
    }
}