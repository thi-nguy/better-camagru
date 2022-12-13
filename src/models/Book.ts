import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorID: {
    type: String,
  },
});

module.exports = mongoose.model('books', BookSchema); // books la ten mot table trong database