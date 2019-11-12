import React from 'react'
import SearchBar from 'search-bar-react'

const SearchInput = props => {
    return (
        <SearchBar
            mobile
            onChange={props.searchPost}
            onFocus={() => console.log('focused')}
            size='large'
            width='60%'
            autoFocus
            placeholder='Search...'
            onClear={() => console.log('closed')}
            value='Initial Value'
        />
    )
}
export default SearchInput