import React from "react";
import "./style.css";


function Header() {
    return (
        <>
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <a className="navbar-brand" href="#"><strong>Google Books</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Search<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Saved">Saved</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;