import React from "react";
import { Card } from "react-bootstrap";
import "./Cardview.css";
import { useNavigate } from "react-router-dom";
export const Cardview = (product) => {

  const navigate = useNavigate()

  const goToNews = () =>{
    navigate('/news',{state:product})
  }
  return (
    <div>
      <Card style={{ cursor: "pointer" }} className="ncard mb-4" onClick={goToNews}>
        <Card.Img src={product.urlToImage} className="elon" />
        <Card.Body className="d-flex flex-column justify-content-between pb-0">
          <div>
            <h6>{product.title}</h6>
            <h5>{product.author} </h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
