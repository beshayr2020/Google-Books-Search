const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.route("/books")
    .get(controller.findAll)
    .post(controller.save)

router.route("/books/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove)

router.route("/googlebooks/:title")
    .get(controller.apiCall)


module.exports = router;