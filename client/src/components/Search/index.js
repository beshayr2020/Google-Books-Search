import React from "react";
import "./style.css";


const SearchBar = props => {
    return (
        <>
            <div className="input-group input-group-lg col-md-11 searchBar">
                <h3 className="margin">Book Search:</h3>
                <input className="form-control" type="text" value={props.search} onChange={props.handleInputChange}/>
            </div>
            <button className="btn btn-secondary me-md-2 button" type="submit" onClick={props.handleFormSubmit}>
                Search
            </button>
        </>
    );
}

export default SearchBar;

