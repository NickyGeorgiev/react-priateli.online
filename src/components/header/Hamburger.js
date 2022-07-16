import { useState } from "react"

export const Hamburger = () => {
    let [isActive, setIsActive] = useState(false)

    const clicked = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <button className="hamburger-menu" onClick={clicked}>
                <div>{!isActive? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}</div>
            </button>
            {isActive && 
            <div className="hamburger-items-list">
                <div className="hamburger-item" onClick={clicked}><a href='#'>Начало</a></div>
                <div className="hamburger-item" onClick={clicked}><a href='#menu'><i className="fas fa-utensils"></i> МЕНЮ</a></div>
                <div className="hamburger-item" onClick={clicked}><a href='#about'>За нас</a></div>
                <div className="hamburger-item" onClick={clicked}><a href="tel:0876442740"><i className="fas fa-phone"></i> 0876 442 740</a></div>
                <div className="hamburger-item" onClick={clicked}><a href="mailto:priateli@abv.bg"><i className="fas fa-at"></i> priateli@abv.bg</a></div>
            </div>}
        </>
    )
}