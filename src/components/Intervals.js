import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Intervals() {
  return (
    <div className="btn-group">
      <ButtonGroup>
        <Button variant="secondary">1 hour</Button>
        <Button variant="secondary">24 hours</Button>
        <Button variant="secondary">7 days</Button>
        <Button variant="secondary">30 days</Button>
        <Button variant="secondary">2 months</Button>
      </ButtonGroup>
    </div>
  );
}

export default Intervals;
