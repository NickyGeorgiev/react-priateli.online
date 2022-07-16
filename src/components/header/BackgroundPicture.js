import background from "../assets/bg1.avif"

export const BackgroundPicture = ()=>{

    return (
        <div className='background-picture'>
            <img src={background} alt='background' />
        </div>
    )
}