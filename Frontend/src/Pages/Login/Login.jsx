import {FakeLogin} from '../../Components/FakeLogin'
import {UseSignUpNav} from '../../Components/CustomHooks/useSignUpNav'
function Login() {

  return (
    <div className="App">
      <div>
      <FakeLogin/>
      </div>
      <div className="card">
        <UseSignUpNav ButtonName={"No tienes una cuenta? Registrate"} />
      </div>
    </div>
  )
}

export default Login