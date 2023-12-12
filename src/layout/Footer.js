import React from "react";
import { Col, Row } from "reactstrap";

//Footer Component
const Footer = () => {
  return (
    <div className="darkTextColor p-4 mt-4">
      <Row className="text-center">
        <Col>
          <p className="outfitfont mt-2 greyfontcolor">
            Made by
            <span
              className="montezfont primaryTextColor ml-2"
              style={{ fontSize: "20px" }}
            >
              Mayank & Ansh
            </span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
