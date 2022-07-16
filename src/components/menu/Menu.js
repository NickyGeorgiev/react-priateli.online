import { useContext } from "react"
import { Articles } from "./Articles"
import { DataContext } from "../contexts/DataContext"

export const Menu = ({ result, addToCartClickHandler }) => {
    let data = useContext(DataContext)
    let forRender = Object.values(data).filter(x => x.type === result)

    return (
        <div className="menu-wrapper">
            {forRender.map(x =>
                <Articles
                    key={x.objectId}
                    info={x}
                    addToCartClickHandler={addToCartClickHandler}
                />)}
        </div>
    )
}