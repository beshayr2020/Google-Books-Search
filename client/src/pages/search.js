// User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";
import { Card } from "../components/Card";
import SearchBar from "../components/Search";
import CardItemSearched from "../components/SearchedBooks";

class Search extends Component {
    state = {
        books: [],
        search: "",
        error: "",
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        
        API.APICall(this.state.search)
            .then(res => {
                console.log(res)
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
            
                    results = results.map(result => {
                        result = {
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }


    handleSavedButton = book => {
        API.saveBook(book)
            .then(function(data) {
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Card >
                    <CardItemSearched books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Card>
            </>
        )
    }
}

export default Search;