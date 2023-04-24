import {useNavigate} from 'react-router-dom'
export const UseSignUpNav = (ButtonCode) => {
    let ButtonName = 'Registrarse'
    const navigate = useNavigate();
    const navToSignUp = () =>{
        navigate('/SignUp')
    }

    if ( ButtonCode == '2') {
        ButtonName = "Registrese Pulsando Aqui"
      }
      
    return(
        <>
        <button onClick={navToSignUp} className='button-deets' style={{marginRight: 48}}  >{ButtonName}</button>
        </>
    )

}