import React from 'react'
import {connect} from 'react-redux'
import {createBeskat} from '../Reduxs/acsions'
function Menu(props) {
const app = ()=>{
const newPost = {title:'hello', id:Date.now().toString()}
props.createBeskat(newPost)
}
props.beskat.filter(e=>{
return console.log(e)
})
return (
<div>
    {props.beskat.map(e=>{
    return <h1 key={e.id}>{e.title} - {e.id}</h1>
    })}
    <button onClick={app}>add</button>
</div>
)
}
const mapDispatreturn = {
createBeskat
}
const mapStateToProps = state => ({
beskat: state.beskat.prod
})
export default connect(mapStateToProps, mapDispatreturn)(Menu)