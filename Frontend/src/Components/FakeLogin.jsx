import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {UseSignUpNav} from './CustomHooks/useSignUpNav'

export const FakeLogin = () => {
  const [Usuario, setUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Usuario === "pepe@gmail.com" && Contraseña === "qwerty") {
        console.log("Usuario validado");
        navigate('/Index')
      } else {
        console.log("Error de autenticación");
      }

};

  return (
    <div >
      <div className='maintitle-container'>
      <h2 className='macaco-position'>Macaco</h2> 
      <h2 className='island-position'>Island</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div >
          <div>
          <label htmlFor="Usuario" className='desc-tag'>Usuario</label>
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


