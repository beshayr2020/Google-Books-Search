import React from "react";
import "./style.css";


export function CardItemSearched(props) {
    return (
        <div className="card">
            <div className="card-body">
                {props.books.map((book, index) => {
                    return (
                        <li key={index} className="search-list list-group-item" key={book._id}>
                            <div className="row">
                                <div className="col-md-10">
                                    <h3>{book.title}</h3>
                                    <h4>Written By: { book.authors ? book.authors.join(",") : "No Authors"}</h4>
                                </div>
                                <div className="col-md-2">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <a href={book.link} target="_blank">
                                            <button className="viewBook btn btn-success">
                                                View Book
                                            </button>
                                        </a>
                                        <button className="btn btn-primary" type="button" id={book.id} onClick={() => props.handleSavedButton(book)}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={book.image} alt={book.title}></img>
                                </div>
                                <div className="col-md-9">
                                    <p>{book.description}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </div>
        </div>
    );
}

export default CardItemSearched;
