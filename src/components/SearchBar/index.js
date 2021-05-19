import React from 'react'

function SearchBar() {
    return (
            <nav className="navbar d-flex justify-content-center">
            <form className="form-inline">
            <input className="form-control" type="search" placeholder="Search by Name"/>
            <button className="btn btn-danger" type="submit">Search</button>
            </form>
            </nav>
    );
};

export default SearchBar