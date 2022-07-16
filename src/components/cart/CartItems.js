import { useEffect, useState, useContext } from "react";
import { DataContext } from '../contexts/DataContext'
import { ItemsInCart } from "../contexts/ItemsInCart";

export const CartItems = ({ info, deleteFromCart, getQty, deleteChangeQty }) => {
    let [value, setValue] = useState(1)
    let data = useContext(DataContext)
    let items = useContext(ItemsInCart)

    useEffect(() => {
        getQty(currentElement)
    }, [value])

    useEffect(()=>{
        deleteChangeQty(currentElement)
    },[items])

    const currentElement = data.find(x => x.name == info.name);

    currentElement.quantity = value;

    const deleteItem = () => {
        deleteFromCart(currentElement)
    }

    const increment = () => {
        setValue(x => x + 1)
        currentElement.quantity = value
    };
    const decrement = () => {
        setValue(x => x - 1)
        currentElement.quantity = value
    };

    return (
        <div className="item">
            <div className="title">{currentElement.name}</div>
            <div className="price">{currentElement.price} лв.</div>
            <div className="quantity">
                <button className="plus" onClick={increment}>+</button>
                <span className="qty">{value > 0 ? value : setValue(1)}</span>
                <button className="minus" onClick={decrement}>-</button>
                <button className="deleteBtn" onClick={deleteItem}>X</button>
            </div>
        </div>
    )
}
