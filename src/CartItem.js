import React from 'react';
const CartItem = (props) => {
    const {price, title, qty} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className='cart-item'>
        <div className='left-block'>
            <img style={styles.image} src={product.img}/>
        </div>
        <div className='right-block'>
            <div style={{fontSize:20}}>{title}</div>
            <div style={{color:'lightgrey'}}>Rs {price}</div>
            <div style={{color:'lightgrey'}}>Qty: {qty}</div>
            <div className='cart-item-actions'>
                <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/992/992651.png"
                    onClick={() => onIncreaseQuantity(product)}
                />
                <img
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/992/992683.png"
                    onClick = {() => onDecreaseQuantity(product)}
                />
                <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                    onClick = {() => onDeleteProduct(product.id)}
                />
            </div>
        </div>
    </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;