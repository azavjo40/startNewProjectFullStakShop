import React, { useState } from 'react'
import Cart from '../Components/Cart'
import kebab from '../images/kebab.jpg'
function Menu() {
    const [data] = useState([
        {
            imageSrc: kebab,
            name: 'kebab',
            p: 'aieaallkahdklgh',
            cost: '12',
            _id: "122242435"
        },
        {
            imageSrc: kebab,
            name: 'kebab',
            p: 'aieaallkahdklgh',
            cost: '12',
            _id: "122242435"
        },
        {
            imageSrc: kebab,
            name: 'kebab',
            p: 'aieaallkahdklgh',
            cost: '12',
            _id: "122242435"
        },
        {
            imageSrc: kebab,
            name: 'kebab',
            p: 'aieaallkahdklgh',
            cost: '12',
            _id: "122242435"
        }
    ])
    return (
        <div className="contMenu" >
            {data.map((prod, i) => {
                return (
                    <Cart key={i} imageSrc={prod.imageSrc} name={prod.name}
                        p={prod.p} cost={prod.cost} _id={i} />
                )
            })}

        </div>
    )
}
export default Menu