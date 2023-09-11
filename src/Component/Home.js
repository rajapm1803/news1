import React, { useState } from "react";
import { Col, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  //   console.log(user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "raja" && pass === "raman") {
      localStorage.setItem("isAuthenticated", true);
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Col lg={5}>
          <h1 className="d-flex  justify-content-center">Welcome </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              required
              className="w-100 mt-3 fs-4 p-2 rounded"
            />

            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-100 mt-3 fs-4 p-2 rounded"
            />
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="submit"
                className="mt-4  bg-black text-white rounded"
                style={{
                  fontSize: "20px",
                  width: "100px",
                  padding: "10px",
                }}
              />
            </div>
          </form>
        </Col>
      </Container>
    </div>
  );
};
