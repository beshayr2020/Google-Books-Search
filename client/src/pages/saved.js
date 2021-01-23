// Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.
import React, { Component } from "react";
import API from "../utils/API";
import "./style.css"
import { Card } from "../components/Card";
import CardItemSaved from "../components/SavedBooks";

class Save extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Card >
                <CardItemSaved savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
            </Card>
        )
    }
}

export default Save;

