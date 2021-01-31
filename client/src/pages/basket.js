import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BasketCart from '../Components/BasketCart'
import ModelAdress from '../Components/ModalAdress'
import '../StyleCss/basket/basket.css'
function Basket() {
    const items = useSelector(state => state.basket.items)
    const [show, setShow] = useState(false)
    const [cost, setCost] = useState()

    const costReduce = useCallback(() => {
        const costs = items.reduce((cos, men) => cos + men.cost, 0)
        setCost(costs)
    }, [items])
    useEffect(() => {
        if (items[0]) {
            costReduce()
        }
    }, [costReduce, items])
    console.log('basket', items)
    return (
        <div className="contMenu" >
            {show && <ModelAdress show={show} setShow={setShow} cost={cost} />}
            {items[0] && items.map((pro, i) => {
                return (
                    <BasketCart key={i} imageSrc={pro.imageSrc}
                        name={pro.name} cost={pro.cost} sos={pro.sos} i={i}
                    />
                )
            })}
            <button onClick={() => setShow(!show)} className="buyBtn">Next {cost}-PLN</button>
        </div>
    )
}
export default Basket