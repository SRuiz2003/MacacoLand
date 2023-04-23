import '../Pages/Index/index.css'
export const ProfileInfo = () =>{
    return (
        <div className='margin-top-info margin-left margin-bottom-25 margin-right'>
            <div className='margin-bottom-15'><span>Nombre de usuario</span></div>
            <div className='margin-bottom-15'><span className='margin-right'>Publicaciones</span> <span className='margin-right'>Seguidores</span> <span>Mascotas seguidas</span></div>
            <div className='margin-bottom-15'><span>Ciudad</span></div>
            <div><span>Descripcion del Usuario</span></div>
        </div>
    )
}