import React from "react";

export const Article = ({ title, content, img, author, year }) => {
  return (
    <div className="container-article">
      <h2>{title}</h2>
      <p>
        {content} {author} - {year}
      </p>

      <img src={`../src/assets/img/${img}`} />
    </div>
  );
};
