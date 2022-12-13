import mongoose from "mongoose";
const Schema = mongoose.Schema;

 const AuthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model('authors', AuthorSchema); // authors la ten mot table trong database
