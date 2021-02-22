import React, { useState } from "react";
import "../styles/accordion/accordion.css";
const Accordion = ({
  button,
  name,
  phone,
  address,
  totalCost,
  payment,
  message,
  date,
  sos,
  cost,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="myAccordion">
      <div className="button" onClick={() => setShow(!show)}>
        {button}
      </div>
      <div className={show ? "show" : "hide"}>
        {name && <p>Name: {name}</p>}
        {phone && <p>Phone: {phone}</p>}
        {address && <p>Address: {address}</p>}
        {totalCost && <p>Total-Cost: {totalCost}</p>}
        {payment && <p>Payment: {payment}</p>}
        {date && (
          <p>
            Date: {new Date(date).toLocaleTimeString()} -
            {new Date(date).toLocaleDateString()}
          </p>
        )}
        {message && <p>Message: {message}</p>}
        {sos && <p>Sos: {sos}</p>}
        {cost && <p>Cost: {cost} PLN</p>}
      </div>
    </div>
  );
};

export default Accordion;
