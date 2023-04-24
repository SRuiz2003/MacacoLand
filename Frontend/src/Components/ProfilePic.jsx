import '../Pages/Index/index.css'
export const ProfilePic = ({src,width,height})=>{
    return (
        <>
            <img className="border-radius-50 margin-left-image" src={src} alt="" width={width} height={height}/>
        </>
    )
}