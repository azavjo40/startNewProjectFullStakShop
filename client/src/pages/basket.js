import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BasketCart from '../Components/BasketCart'
import ModelAdress from '../Components/ModalAdress'
import '../StyleCss/basket/basket.css'
function Basket() {
    const menu = useSelector(state => state.basket.form)
    const [show, setShow] = useState(false)
    const [cost, setCost] = useState([])
    const costReduce = useCallback(() => {
        const costs = menu.reduce((cos, men) => cos + men.cost, 0)
        setCost(costs)
    }, [menu])
    useEffect(() => {
        if (menu.cost) {
            costReduce()
        }
    }, [costReduce, menu.cost])
    return (
        <div className="contMenu" >
            {show && <ModelAdress show={show} setShow={setShow} cost={cost} />}
            {menu && menu.map((pro, i) => {
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