const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

// Serve up static 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    // Send every other request to the React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

// Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});