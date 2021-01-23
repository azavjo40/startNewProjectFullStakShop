import React, { useEffect, useState } from 'react'
import MenuCart from '../Components/MenuCart'
import kebab from '../images/kebab.jpg'
import Alert from '../Components/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { allmenu } from '../Reduxs/menuAcsion'
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
    const alert = useSelector(state => state.general.alert)
    const authUser = useSelector(state => state.auth.isAuthUser)
    const menu = useSelector(state => state.menu.allMenu)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allmenu())
    }, [dispatch])
    if (!menu) {
        return (
            <div className="contMenu" >
                { data.map((pro, i) => {
                    return (
                        <MenuCart key={i} imageSrc={pro.imageSrc} name={pro.name}
                            p={pro.p} cost={pro.cost} _id={i} authUser={authUser} />
                    )
                })}
            </div>
        )
    }
    return (
        <div className="contMenu" >
            {alert && <Alert text={alert} />}
            {menu.map((pro) => {
                return (
                    <MenuCart key={pro._id} imageSrc={pro.imageSrc} name={pro.name}
                        p={pro.p} cost={pro.cost} _id={pro._id} authUser={authUser} />
                )
            })}
        </div>
    )
}
export default Menu