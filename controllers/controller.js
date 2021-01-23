const db = require("../models");
const axios = require("axios");

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title)
            .then((response) => res.json(response.data.items))
            .catch(err => res.status(422).json(err))
    },

    // Find All Books in Database
    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Find Specific Book in Database
    findById: (req, res) => {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Save a Book to Database
    save: (req, res) => {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Update a Book in Database
    update: (req, res) => {
        db.Book
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Remove a Book From Database
    remove: (req, res) => {
        db.Book
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};