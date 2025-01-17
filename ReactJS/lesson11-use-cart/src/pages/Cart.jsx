import React from 'react'
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        cartTotal,
        emptyCart,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    if (isEmpty) return <div className='d-flex align-items-center justify-content-center flex-column'><img src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" /></div>;
    return (
        <div style={{ height: "70vh" }}>
            <div className='d-flex align-items-center justify-content-center flex-column' >
                <p className='h1 my-5'>Cart</p>
                <Col sm={12} md={9}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td><img src={item.images[0]} alt={item.title} width={70} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price*item.quantity}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                        <span className='mx-3'>{item.quantity}</span>
                                        <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={()=>{removeItem(item.id)}}>X</button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    <button className='btn btn-danger my-3' onClick={emptyCart}>Empty cart</button>
                    <p className='h4'>Total Price: ${cartTotal.toFixed()}</p>
                </Col>

            </div>
        </div>
    )
}

export default Cart