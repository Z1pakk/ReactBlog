import React from "react";
import { Link } from "react-router-dom";

const getAuthors = function(authors) {
  var authorsJSX = [];
  for (let i = 0; i < authors.length; i++) {
    const item = authors[i];
    authorsJSX.push(
      <Link key={i} to={`/author/${item.userName}`}>
        {item.name}&nbsp;
      </Link>
    );
    if (i !== authors.length - 1) {
      authorsJSX.push("& ");
    }
  }
  return authorsJSX;
};

const getAuthorsAndOthers = function(authors) {
  var authorsJSX = [];
  for (let i = 0; i < authors.length; i++) {
    const item = authors[i];
    authorsJSX.push(
      <Link key={item.userName} to={`/author/${item.userName}`}>
        {item.name}&nbsp;
      </Link>
    );
    if (i !== authors.length - 1) {
      authorsJSX.push(<span key="others">and others </span>);
      break;
    }
  }
  return authorsJSX;
};

export { getAuthors, getAuthorsAndOthers };
