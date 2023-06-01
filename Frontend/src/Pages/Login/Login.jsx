import {FakeLogin} from '../../Components/FakeLogin'
import './Signin.css'
import TokenContext from '../../Components/CustomHooks/TokenContext';
import { useContext } from 'react'
function Login() {
  const { token, updateToken } = useContext(TokenContext);
  updateToken('');
  return (
    <>
    <div className="sign-in">
      <FakeLogin/>
    </div>
    </>
      
  )
}

export default Login