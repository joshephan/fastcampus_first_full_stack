const mongoose = require("mongoose");

const Article = new mongoose.Schema({
  content: { type: String, default: "", required: true }, // 게시글 본문
  createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = Article;