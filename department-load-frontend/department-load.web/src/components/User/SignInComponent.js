import React, { useContext } from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import { useAddForm } from "../../hooks";
import { UserContext } from "../../contexts/UserContext";

export default function SignInComponent() {
  const user = {
    username: "",
    password: ""
  };

  const { formState, handleInputChange } = useAddForm(user);
  const userInfo = useContext(UserContext);

  const handleClick = e => {
    e.preventDefault();
    const jsoned = JSON.stringify(formState);
    e.target.name === "signin"
      ? userInfo.login(jsoned)
      : userInfo.register(jsoned);
  };

  return (
    <Container>
      <Row style={{ marginTop: "300px" }}>
        <Form
          style={{
            width: "100%",
            maxWidth: "350px",
            padding: "15px",
            margin: "auto"
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              required
              placeholder={`Enter your username`}
              name="username"
              value={formState.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              required
              placeholder="Enter your password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button
            variant="dark"
            onClick={handleClick}
            name="signin"
            style={{ width: "100%" }}
            //style={{ width: "45%", marginRight: "5px", float: "left" }}
          >
            Log in
          </Button>
          {/* <Button
              variant="success"
              style={{ width: "45%", marginLeft: "5px", float: "right" }}
              name="signup"
              onClick={handleClick}
            >
              Sign up
            </Button> */}
        </Form>
      </Row>
    </Container>
  );
}
