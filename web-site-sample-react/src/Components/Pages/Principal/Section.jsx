import React, { useState, useEffect } from "react";
import { Article } from "../../iComponents/Article.jsx";
import articles from "../../../assets/articles.json";
import {Button} from '../../iComponents/Button.jsx';
import "./Section.css";
export const Section = () => {
  let value = 1;

  const [nextNew, setNexNew] = useState(value);
  if (nextNew > articles.length || nextNew == 0) {
    setNexNew(1);
  }
  const [article, setArticle] = useState({
    id: "",
    title: "",
    content: "",
    img: "",
    author: "",
    year: "",
  });
  const result = articles.filter((e) => e.id == nextNew);
  useEffect(() => {
    setArticle(result);
  }, [nextNew]);

  return (
    <div className="container-section">
      {result.map((e) => {
        return (
          <Article
            key={e.id}
            title={e.title}
            content={e.content}
            img={e.img}
            author={e.author}
            year={e.year}
          />
        );
      })}
      <div className="container-button-section">
        <Button text="Anterior" onClick={() => setNexNew(value - 1)}/>
        <Button text="Reiniciar" onClick={() => setNexNew(value)}/>
        <Button text="Siguiente" onClick={() => setNexNew(value + 1)}/>
      </div>
    </div>
  );
};
