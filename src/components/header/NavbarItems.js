export const NavbarItems = () => {
    return (
        <>
            <li className='navItem'>
                <a href='#'>Начало</a>
            </li>
            <li className='navItem'>
                <a href='#menu'><i className="fas fa-utensils"></i> МЕНЮ</a>
            </li>
            <li className='navItem'>
                <a href='#about'>За нас</a>
            </li>
            <li className='navItem'>
                <a href="tel:0876442740"><i className="fas fa-phone"></i> 0876 442 740</a>
            </li>
            <li className="navItem">
                <a href="mailto:priateli@abv.bg"><i className="fas fa-at"></i> priateli@abv.bg</a>
            </li>
        </>
    )
}