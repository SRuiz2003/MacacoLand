import {FakeSignUp} from '../../Components/FakeSignUp.jsx'
import {UseLoginNav} from '../../Components/CustomHooks/useLoginNav'
function SignUp() {

  return (
    <div className="App">
      <div>
      <FakeSignUp/>
      </div>
      <div className="card">
        <UseLoginNav ButtonCode={2}/>
      </div>
    </div>
  )
}

export default SignUp