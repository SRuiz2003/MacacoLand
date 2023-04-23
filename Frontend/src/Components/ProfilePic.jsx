import '../Pages/Index/index.css'
export const ProfilePic = ({src})=>{
    console.log(src)
    return (
        <>
            <img className="border-radius-50 margin-left-image margin-top" src={src} alt="" width='200px'/>
        </>
    )
}