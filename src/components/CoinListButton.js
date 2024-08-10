import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import ChartData from "./ChartData";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.toLowerCase().includes(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);

const CoinListButton = ({ onCoinSelect }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelect = (coinId) => {
    console.log("HandleSelect -> coinId:", coinId);
    onCoinSelect(coinId);
  };

  return (
    <div className="btn-group">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Cryptocurrency
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {coins.map((coin) => (
            <Dropdown.Item
              key={coin.id}
              eventKey={coin.id}
              // onSelect={handleSelect}
              onClick={() => handleSelect(coin.id)}
            >
              {coin.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CoinListButton;
