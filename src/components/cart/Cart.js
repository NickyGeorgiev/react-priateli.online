import { useContext, useEffect, useState } from "react"
import { CartItems } from "./CartItems"
import { ItemsInCart } from "../contexts/ItemsInCart"

export const Cart = ({ deleteFromCart, activateForm }) => {
    let [totalPriceArr, setTotalPriceArr] = useState([0])
    let items = useContext(ItemsInCart)

    const getQty = () => {
        setTotalPriceArr(items.map(x => x.quantity * x.price))
    }

    const deleteChangeQty = () => {
        setTotalPriceArr(items.map(x => x.quantity * x.price))
    }

    let finalSum = totalPriceArr.reduce((a, b) => a + b)

    if (items.length != 0) {
        return (
            <section id="cart-section" className="cart">
                <h4>Количка</h4>
                <div className="headers">
                    <div className="cart-item">Продукти</div>
                    <div className="cart-price">Цена</div>
                    <div className="cart-quantity">Количество</div>
                </div>
                {items.map((x, i) => x.isRendered && <CartItems
                    key={i}
                    info={x}
                    deleteFromCart={deleteFromCart}
                    getQty={getQty}
                    deleteChangeQty={deleteChangeQty}
                />)}
                <div className="total">
                    <span className="shipping">Цена за доставка: <span id="dostavka-price">1.99</span> лв.</span>
                    <span className="total-title">Обща сума:</span>
                    <span className="total-price">{(finalSum + 1.99).toFixed(2)} лв.</span>
                </div>
                {finalSum > 15 && <button className="continue" onClick={activateForm} >Продължете с поръчката</button>}
            </section>
        )
    }
}