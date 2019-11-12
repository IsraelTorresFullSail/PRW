import React, { Component } from 'react'

class SearchList extends Component {

    render() {
        return (
            <li key={this.props.id}>
                <span>{this.props.val.gTitle}</span>
                <span>{this.props.val.gPost}</span>
            </li>
        )
    }
}
export default SearchList