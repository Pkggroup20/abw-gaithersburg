import React from "react";
import { Card } from "react-bootstrap";

export default function ItemCard({ title, sub, priceInfo, price }) {
  return (
    <Card
      style={{
        width: "30rem",
        fontFamily: "'Lato', sans-serif",
        color: "#000000",
        textAlign: "left",
        margin: "1% 1%",
      }}
    >
      <Card.Body>
        <p style={{ fontSize: "1.1rem" }}>{title}</p>
        <Card.Subtitle className="mb-2 text-muted">{sub || ""}</Card.Subtitle>
        <Card.Text className="mb-2 text-muted">
          {priceInfo}{" "}
          <span style={{ fontWeight: "500", color: "#000000" }}>{price}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
