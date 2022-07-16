export const Articles = ({info, addToCartClickHandler})=>{

    const buyButtonClick = ()=>{
        addToCartClickHandler(info)
    }

    return (
        <div className={`${info.type} article`}>
            <div className='name'>{info.name}</div>
            <div className='subtitle'>{info.subtitle ? info.subtitle : "\u00a0" }</div>
            <div className='price'>{info.price} лв.</div>
            <button className="add-to-cart"><i className="fas fa-shopping-bag" onClick={buyButtonClick}></i></button>
        </div>
    );
}