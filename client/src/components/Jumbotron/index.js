import React from "react";
import "./style.css";


function Jumbotron() {
    return (

        // <div style={{ textAlign: "center", backgroundImage: "url(./jumbo.png)" }}
        //     className="jumbotron" >
        //     <img src="./google_books.png" alt="google-books-logo" style={{ height: "200px" }} />
        // </div>


        <div className="text-center marginTop">
            {/* <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3> */}
        <img src="./google_books.png" alt="google-books-logo" style={{ height: "200px" }} />
        </div>
    )
}

export default Jumbotron;