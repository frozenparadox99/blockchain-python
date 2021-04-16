import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { API_BASE_URL } from "../config";
import history from "../history";

const ConductTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [knownAddresses, setKnownAdresses] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/known-adresses`)
      .then((response) => response.json())
      .then((json) => setKnownAdresses(json));
  }, []);

  const updateRecipient = (event) => {
    setRecipient(event.target.value);
  };

  const updateAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const submitTransaction = () => {
    fetch(`${API_BASE_URL}/wallet/transact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient, amount }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("submit transaction json", json);
        alert("Success!");

        history.push("/transaction-pool");
      });
  };

  return (
    <div className="ConductTransaction">
      <Link to="/">Home</Link>
      <hr />
      <h3>Conduct a Transaction</h3>
      <br />
      <FormGroup>
        <FormControl
          input="text"
          placeholder="recipient"
          value={recipient}
          onChange={updateRecipient}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          input="number"
          placeholder="amount"
          value={amount}
          onChange={updateAmount}
        />
      </FormGroup>
      <div>
        <Button variant="danger" onClick={submitTransaction}>
          Submit
        </Button>
      </div>
      <br />
      <h4>Known Adresses</h4>
      <div>
        {knownAddresses.map((knownAddress, i) => (
          <span key={knownAddress}>
            <u> {knownAddress}</u>
            {i !== knownAddresses.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ConductTransaction;
