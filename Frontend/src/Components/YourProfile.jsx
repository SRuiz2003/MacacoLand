import { useNavigate } from "react-router-dom"

export const YourProfile = () =>{
    const navigate = useNavigate();
    const handleClick = (event) =>{
        event.preventDefault()
        navigate('/Profile')
    }
    return (
        <div onClick={handleClick} className="your-profile-button">
            <span>Tu Perfil</span>
        </div>
    )
}