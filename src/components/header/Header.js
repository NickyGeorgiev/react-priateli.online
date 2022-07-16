import brand from '../assets/brand.png'
import { useEffect, useState } from "react";
import { Hamburger } from './Hamburger';
import { NavbarItems } from './NavbarItems'

export const Header = ({itemsInCartCounter}) => {
    let [ham, setHam] = useState(false)
    let [index ,setIndex] = useState(0)
    let width = window.innerWidth;
    let [shake, setShake ]=useState(false)

    useEffect(()=>{
        setIndex(itemsInCartCounter)
        setShake(true)
        setTimeout(()=>{setShake(false)},400)
    },[itemsInCartCounter])
    
    useEffect(()=>{
        if (width < 900) {
            setHam(true)
        } else {
            setHam(false)
        }
    },[])

    window.addEventListener('resize', ()=>{
        width = window.innerWidth
        if (width < 900) {
            setHam(true)
        } else {
            setHam(false)
        }
    })

    return (
        <section className="header">
            <nav className="navBar">
                <ul className='navUl'>
                    <li className='navItem'>
                        <a href="#" className="brand"><img src={brand} alt='logo'></img></a>
                    </li>
                    <li className="navItem">
                        <a href="#cart-section"><i className={shake ? "fas fa-shopping-cart shake" : "fas fa-shopping-cart"}></i> {!ham && 'Количка'}<i className="index">{index}</i></a>
                    </li>
                    {ham && <Hamburger />}
                    {!ham && <NavbarItems />}
                </ul>
            </nav>
        </section>
    )
}