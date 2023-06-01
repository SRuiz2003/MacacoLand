import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UseSignUpNav} from './CustomHooks/useSignUpNav';
import TokenContext from './CustomHooks/TokenContext';

export const FakeLogin = () => {
  const { token, updateToken } = useContext(TokenContext);
  const [Usuario, setUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body:  JSON.stringify({ "email": `${Usuario}`,
              "contraseña": `${Contraseña}` })

  };
    const response = await fetch('https://macacoland--sruiz2003.repl.co/api/auth/login', requestOptions);
    const data = await response.json();
    if (data.ok === true) {
      const newToken = data.token
      updateToken(newToken);
      console.log(token);
      navigate('/Index')
      }else{
        console.log(data.errors);
      }

}

  return (
    <div >
      <div className='maintitle-container'>
      <h2 className='macaco-position'>Macaco</h2> 
      <h2 className='island-position'>Island</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div >
          <div>
          <label htmlFor="Usuario" className='desc-tag'>Correo electrónico</label>
          </div>
          <input
            type="Usuario"
            id="Usuario"
            value={Usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className='input-space'
          />
        </div>
        <div >
          <div>
          <label htmlFor="Contraseña" className='desc-tag'>Contraseña</label>
          </div>
          <input
            type="Contraseña"
            id="Contraseña"
            value={Contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            className='input-space'
          />
        </div>
        <div className='button-container'>
        <button className='button-deets' type="submit">Iniciar Sesión</button>
        <UseSignUpNav ButtonCode = '2' />
        </div>
      </form>
      <div>
        <img src="src/assets/banana.png" alt='banana.png' className='img-banana'/>
      </div>
    </div>
  );
}


