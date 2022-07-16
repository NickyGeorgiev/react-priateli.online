import { Cart } from "./cart/Cart"
import { MenuSection } from "./menu/MenuSection"
import { useEffect, useState} from "react"
import { ItemsInCart } from './contexts/ItemsInCart'
import { Form } from './form/Form'
import { sendClientDataFetch } from "./dataSendServices/sendClientDataFetch"

export const Service = ({getIndex}) => {
    let [itemForCart, setItemForCart] = useState([]);
    let [isFormActive, setFormActive] = useState(false);
    let [clientData, setClientData] = useState({});
    let [isDataRedyToSend, setIsDataRedyToSend] = useState(false);
    useEffect(()=>{getIndex(itemForCart)},[itemForCart]);

    const addToCartClickHandler = (currentElement) => {
        currentElement.isRendered = true;
        setItemForCart(oldArr => [...oldArr, currentElement]);
    }

    const deleteFromCart = (currentElement) => {
        currentElement.isRendered = false;
        setItemForCart(itemForCart.filter(x => x.isRendered === true));
    }

    const activateForm = () => {
        setFormActive(!isFormActive);
    }
    
    const purchase = (clientData) => {
        setClientData(clientData);
        setIsDataRedyToSend(true);
    }

    if(isDataRedyToSend){
        sendClientDataFetch(clientData);
    }
    
    return (
        <ItemsInCart.Provider value={itemForCart}>
            <Cart deleteFromCart={deleteFromCart} activateForm={activateForm} />
            {isFormActive && <Form purchase={purchase} />}
            <MenuSection addToCartClickHandler={addToCartClickHandler} />
        </ItemsInCart.Provider>
    )
}