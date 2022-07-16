import { MenuFilter } from "./MenuFilter"
import { useState } from "react"
import { Menu } from "./Menu"


export const MenuSection = ({addToCartClickHandler})=>{

    let dataType = [
        { en: 'salati', bg: 'салати' },
        { en: 'kartofeni', bg: 'картофи' },
        { en: 'bezmesni', bg: 'безмесни' },
        { en: 'pileshkaSkara', bg: 'пилешка скара' },
        { en: 'svinskaSkara', bg: 'свинска скара' },
        { en: 'pileshkiMezeta', bg: 'пилешки мезета' },
        { en: 'svinskiMezeta', bg: 'свински мезета' },
        { en: 'pileshkiQstiq', bg: 'пилешки ястия' },
        { en: 'svinskiQstiq', bg: 'свински ястия' },
        { en: 'sachove', bg: 'сачове' },
        { en: 'spageti', bg: 'спагети' },
        { en: 'rizoto', bg: 'ризото' },
        { en: 'garnituri', bg: 'гарнитури и сосчета' },
        { en: 'pitki', bg: 'питки и пърленки' },
        { en: 'mezeta', bg: 'мезета' },
        { en: 'deserti', bg: 'десерти' },]

    let [result, setResult] = useState()

    const onRenderHandler = (nameEn)=>{
        setResult(nameEn)
    }

    return(
        <section id="menu" className='menu-section'>
            <h2>МЕНЮ</h2>
            <p><i className="fa-solid fa-arrows-left-right"></i> изберете категория <i className="fa-solid fa-arrows-left-right"></i></p>
            <MenuFilter dataType={dataType} onRenderHandler={onRenderHandler}/>
            <Menu result={result} addToCartClickHandler={addToCartClickHandler} />
        </section>
        
    )
}