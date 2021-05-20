import React from 'react'
import "./index.css";

const SearchBar = (props) => {
    return (
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange = {props.handleChange}
        />


    )



}

export default SearchBar