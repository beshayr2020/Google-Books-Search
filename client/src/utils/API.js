const axios = require("axios");


export default {
    // Make API Call
    APICall: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all Books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets a Specific Book 
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a Book to the Database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // Deletes a Book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}

