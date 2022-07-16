import { Filter } from "./Filter"

export const MenuFilter = ({ dataType, onRenderHandler }) => {

    return (
        <div className='menu-filter'>
            <ul>
                {dataType.map(x => 
                <Filter 
                    key={x.en} 
                    nameEn={x.en} 
                    nameBg={x.bg} 
                    onRenderHandler={onRenderHandler}
                />)}
            </ul>
        </div>
    )
}