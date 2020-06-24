import React from "react";
import ArticleInput from "./ArticleInput";
import UsersList from "./UsersList";
import ArticlesList from "./ArticlesList";

const Articles = ({ onAdd, usersP, articlesP }) => (
  <div>
    <ArticleInput users={usersP} onArticleAdd={onAdd} />
    <UsersList users={usersP} />
    <ArticlesList articles={articlesP} />
  </div>
);

export default Articles;
