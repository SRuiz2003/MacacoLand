import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {UseLoginNav} from './CustomHooks/useLoginNav'

export const FakeSignUp =()=> {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body:  JSON.stringify({ "email": `${email}`,
              "contraseña": `${password}`,
              "nombre": `${username}`,
              "birthday": `${birthdate}`,
              "sexo": `${gender}` })

  };
    const response = await fetch('https://macacoland--sruiz2003.repl.co/api/auth/signup', requestOptions);
    const data = await response.json();
    if (data.ok === true) {
      navigate('/Login')
      }else{
        console.log(data.errors);
      }
  };

  return (
    <>
    <div>
    <div className='maintitle-container'>
      <h2 className='macaco-position'>Macaco</h2> 
      <h2 className='island-position'>Island</h2>
    </div>
    <div>
    <form onSubmit={handleSubmit}>
      <div>
      <label className='desc-tag'>Correo electrónico</label>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='input-space'
        />
      
      <br />
      <div>
      <label className='desc-tag'>Usuario</label>
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='input-space'
        />
      <br />
      <div>
      <label className='desc-tag'>Contraseña</label>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='input-space'
        />
      <br />
      <div>
      <label className='desc-tag'>Fecha de nacimiento</label>
        </div>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
          className='input-space'
        />
      <br />
      <div>
      <label className='desc-tag'>Sexo</label>
        </div>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required className='input-space'>
          <option value="">Selecciona tu Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      <br />
     <div className='button-container'>
     <button type="submit" className='button-deets'>Registrarse</button>
     <UseLoginNav ButtonCode={2}/>
     </div>
    </form>
    </div>
    <div>
    <img src="src/assets/banana.png" alt='banana.png' className='img-banana'/>
    </div>
    </div>
    </>
  );
}

