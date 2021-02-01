import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BasketCart from '../Components/BasketCart'
import ModelAdress from '../Components/ModalAdress'
import '../StyleCss/basket/basket.css'
function Basket() {
    const items = useSelector(state => state.basket.items)
    const [showAddress, setShowAddress] = useState(false)
    const [cost, setCost] = useState()

    const costReduce = useCallback(() => {
        const costs = items.reduce((initial, costs) => initial + costs.cost, 0)
        setCost(costs)
    }, [items])
    useEffect(() => {
        if (items[0]) {
            costReduce()
        }
    }, [costReduce, items])
    return (
        <div className="contMenu" >
            {showAddress && <ModelAdress showAddress={showAddress} setShowAddress={setShowAddress} cost={cost} />}
            {items[0] && items.map((item, i) => {
                return (
                    <BasketCart key={i} item={item.items} dele={item} />
                )
            })}
            <button onClick={() => setShowAddress(!showAddress)} className="buyBtn">Next {cost}-PLN</button>
        </div>
    )
}
export default Basket