
import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import './cart-icon.scss'

import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon  className="shopping-icon"  />
            <span className="item-count">{itemCount}</span>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
