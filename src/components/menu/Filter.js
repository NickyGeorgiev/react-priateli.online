import { useRef } from "react"
import { pics } from "../assets/Pictures"

export const Filter = ({ nameEn, nameBg, onRenderHandler }) => {
    const pick = useRef();

    function onFilter(e) {
        [...pick.current.parentElement.children].forEach(x => x.className = 'filter')

        if (e.target.tagName === 'SPAN' || e.target.tagName === 'LI') {
            return;
        }
        pick.current.className = 'filter picked'
        onRenderHandler(nameEn);
    }

    return (
        <li className='filter'
            ref={pick}
            key={nameEn}
            section-name={nameEn}
            onClick={onFilter}
        >
            <img src={pics[nameEn]} alt={nameEn}/>
            <span className='text'> {nameBg} </span>
        </li>
    )
}