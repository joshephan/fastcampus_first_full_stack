const { Article } = require("../mongoose/model");

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body;
  const newArticle = await Article({ content });
  const saveRequest = await newArticle.save();
  res.send(saveRequest);
};

// READ
const articleRead = async (req, res) => {
  const articles = await Article.find({});
  res.send(articles);
};

// UPDATE
const articleUpdate = async (req, res) => {
  const { id, content } = req.body;
  const updatedArticle = await Article.findByIdAndUpdate(id, { content });
  res.send(updatedArticle);
};

// DELETE
const articleDelete = async (req, res) => {
  const { id } = req.params;
  const deleteArticle = await Article.findByIdAndDelete(id);
  res.send(deleteArticle);
};

module.exports = {
  articleCreate,
  articleRead,
  articleUpdate,
  articleDelete,
};
