import React from 'react'
import './searchBar.css'

const SearchBar = ({ onInput, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className="searchBar_form">
            <input name="searchBar" className="HomeScreenSearchBar" type="search" placeholder="Search product" onInput={onInput}  />
        </form>

    )
}

export default SearchBar