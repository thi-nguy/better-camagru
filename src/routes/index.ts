import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); // name of the file in the Views folder
});

module.exports = router;
