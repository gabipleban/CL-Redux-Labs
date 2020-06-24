import React from "react";

const ArticlesList = ({ articles = [] }) => (
  <ol>
    { articles.map((article) => <li key={article.title}>{article.title}</li>) }
  </ol>
);

export default ArticlesList;

