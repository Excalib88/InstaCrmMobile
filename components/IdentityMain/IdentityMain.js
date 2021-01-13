import React from 'react';
import { Link } from 'react-router-dom';
import './IdentityMain.css';
import { Col, Row, Grid } from "react-native-easy-grid";

const IdentityMain = () => {
  return (
    <div className="main">
      <Grid>
        <Row>
          <Col/>
          <Col size="2">
            <Link className="auth_button" to="/auth">АВТОРИЗАЦИЯ</Link>
          </Col>
          <Col/>
        </Row>
        <Row>
          <Col/>
          <Col size="2">
            <Link className="auth_button" to="/register">РЕГИСТРАЦИЯ</Link>
          </Col>
          <Col/>
        </Row>
      </Grid>
    </div>
  );
};

export default IdentityMain;
