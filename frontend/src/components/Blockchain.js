import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Block from "./Block";
import { API_BASE_URL } from "../config";
import { Button } from "react-bootstrap";

const PAGE_RANGE = 3;

function Blockchain() {
  const [blockchain, setBlockChain] = useState([]);
  const [blockchainLength, setBlockchainLength] = useState(0);

  const fetchBlockchainPage = ({ start, end }) => {
    fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
      .then((response) => response.json())
      .then((json) => setBlockChain(json));
  };

  useEffect(() => {
    fetchBlockchainPage({ start: 0, end: PAGE_RANGE });

    fetch(`${API_BASE_URL}/blockchain/length`)
      .then((response) => response.json())
      .then((json) => setBlockchainLength(json));
  }, []);

  const buttonNumbers = [];
  for (let i = 0; i < blockchainLength / PAGE_RANGE; i++) {
    buttonNumbers.push(i);
  }

  return (
    <div className="Blockchain">
      <Link to="/">Home</Link>
      <hr />
      <h3>Blockchain</h3>
      <div>
        {blockchain.map((block) => (
          <div key={block.hash}>{<Block key={block.hash} block={block} />}</div>
        ))}
      </div>
      <div>
        {buttonNumbers.map((number) => {
          const start = number * PAGE_RANGE;
          const end = (number + 1) * PAGE_RANGE;
          return (
            <spam
              key={number}
              onClick={() => fetchBlockchainPage({ start, end })}
            >
              <Button size="sm" variant="danger">
                {number + 1}
              </Button>{" "}
            </spam>
          );
        })}
      </div>
    </div>
  );
}

export default Blockchain;
