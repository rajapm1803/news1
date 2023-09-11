import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Cardview } from './Cardview'


export const Dashboard = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=b3389e4b2090499aa974e6d9e1098db3");
          setNews(response.data?.articles);
        } catch (error) {
          // Handle the error here, e.g., log it or set an error state.
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);

  return (
    <Container fluid className="ps-5 pe-5">
    <Row>
      {news.map((product,name) => {
        return (
          <Col key={name} lg={3} md={6} xs={12}>
            <Cardview {...product}  />
          </Col>
        );
      })}
    </Row>
  </Container>
  )
}
