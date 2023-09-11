import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Newsview = () => {
  const location = useLocation();
  const product = location.state;
//   console.log(product, "llll");
  return (
    <Container>
      <h1
        style={{
          fontFamily: "timesNewRoman",
          fontWeight: "700",
          color: "#e70e0e",
        }}
        className="mt-3"
      >
        {product.source.name}
      </h1>
      <h4 style={{ color: "#384a7f" }}>{product.title}</h4>
      <Card.Img src={product.urlToImage} className="elon rounded mt-4" style={{objectFit:"cover"}} />
      <div style={{display:"flex",justifyContent:'space-between',color:"#384a7f"}}>
      <h5 className="mt-2">{product.author} </h5>
      <h5 className="mt-2">{product.publishedAt} </h5>
      </div> 
      <h6 className="mt-3" style={{color:"#828eb3"}}>{product.description}</h6>
      <h6 className="mt-3" style={{color:"#828eb3"}}>{product.content} </h6>
    </Container>
  );
};
