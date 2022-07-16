import { useContext, useState } from "react";
import { ItemsInCart } from "../contexts/ItemsInCart";

export const Form = ({ purchase }) => {
    let items = useContext(ItemsInCart)

    let total = items.map(x => x.price * x.quantity).reduce((a, b) => a + b, 0)

    const submitData = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)

        let clientData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            tel: formData.get('tel'),
            address: formData.get('address'),
            addressNumber: formData.get('address-number'),
            purchase: items.map(x => [x.name, x.price, x.quantity]),
            totalSum: (total + 1.99).toFixed(2)
        }
        purchase(clientData);
    }

    return (
        <div className="form" onSubmit={submitData}>
            <p className="required">Полетата със * са задължителни за попълване!</p>
            <form className="client-info" name="export" method="POST">
                <label htmlFor="first">Име *</label><br />
                <input type="text" id="firstName" name="firstName" /><br />
                <label htmlFor="last">Фамилия</label><br />
                <input type="text" id="lastName" name="lastName" /><br />
                <label htmlFor="tel">Телефон *</label><br />
                <input type="number" id="tel" name="tel" /><br />
                <label htmlFor="address">Улица *</label><br />
                <input type="text" id="address" name="address" /><br />
                <label htmlFor="adress-number">№ *</label><br />
                <input type="number" id="address-number" name="address-number" /><br />
                <input className="submit" type="submit" value="Завършете поръчката" />
            </form>
        </div>
    )
}