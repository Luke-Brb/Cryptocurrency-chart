import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Cryptocurrency() {
  return (
    <div className="btn-group">
      <DropdownButton id="dropdown-basic-button" title="Cryptocurrency">
        <Dropdown.Item href="#/action-1">BTC Bitcoin</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ETH Ethereum</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DOGE Dogecoin</Dropdown.Item>
        <Dropdown.Item href="#/action-4">AMZN Amazon.com</Dropdown.Item>
        <Dropdown.Item href="#/action-5">AAPL Apple.inc</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Cryptocurrency;
