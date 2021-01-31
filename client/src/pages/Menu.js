import React, { useEffect } from 'react'
import MenuCart from '../Components/MenuCart'
import Alert from '../Components/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { allmenu } from '../Reduxs/menuAcsion'
function Menu() {
    const alert = useSelector(state => state.general.alert)
    const authUser = useSelector(state => state.auth.isAuthUser)
    const menu = useSelector(state => state.menu.allMenu)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allmenu())
    }, [dispatch])
    return (
        <div className="contMenu" >
            {alert && <Alert text={alert} />}

            {menu && menu.map((item) => {
                return (
                    <MenuCart
                        key={item._id}
                        item={item}
                        authUser={authUser}
                    />
                )
            })}
        </div>
    )
}
export default Menu