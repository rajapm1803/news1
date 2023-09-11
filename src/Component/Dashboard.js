import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Cardview } from './Cardview'


export const Dashboard = () => {
    // const navigate = useNavigate()
    const [news, setNews] = useState([])

  useEffect(() => {
    // if(! localStorage.getItem("isAuthenticated")){
    //     navigate('/home')
    // }
   axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=b3389e4b2090499aa974e6d9e1098db3")
         .then((res)=>{
          setNews(res.data?.articles)
          // console.log(news);
          
         })
  }, [])

  return (
    <Container fluid className="ps-5 pe-5">
    <Row>
      {news.map((product) => {
        return (
          <Col key={product.name} lg={3} md={6} xs={12}>
            <Cardview {...product}  />
          </Col>
        );
      })}
    </Row>
  </Container>
  )
}
