import React, { useCallback, useEffect, useState } from "react";
import { BasketCart, ModelAdress } from "../Components";
import { useSelector } from "react-redux";
import "../styleCss/basket/basket.css";
function Basket() {
  const items = useSelector((state) => state.basket.items);
  const [showAddress, setShowAddress] = useState(false);
  const [cost, setCost] = useState();

  const costReduce = useCallback(() => {
    const costs = items.reduce((initial, costs) => initial + costs.cost, 0);
    setCost(costs);
  }, [items]);
  useEffect(() => {
    if (items[0]) {
      costReduce();
    }
  }, [costReduce, items]);
  return (
    <div className="contBasket">
      {showAddress && (
        <ModelAdress
          showAddress={showAddress}
          setShowAddress={setShowAddress}
          cost={cost}
        />
      )}
      {items[0] &&
        items.map((item, i) => {
          return <BasketCart key={i} item={item} />;
        })}
      {!showAddress && (
        <button onClick={() => setShowAddress(!showAddress)} className="buyBtn">
          Next {cost}-PLN
        </button>
      )}
    </div>
  );
}
export default Basket;
