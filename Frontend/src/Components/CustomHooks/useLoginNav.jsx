import {useNavigate} from 'react-router-dom'
export const UseLoginNav = (ButtonCode) => {
    let ButtonName = 'Iniciar Sesion'
    const navigate = useNavigate();
    const navToLogin = () =>{
        navigate('/Login')
    }

    if ( ButtonCode == 2) {
        ButtonName = "Inicie sesion para acceder a su contenido"
      }
      
    return(
        <>
        <button onClick={navToLogin}>{ButtonName}</button>
        </>
    )

}