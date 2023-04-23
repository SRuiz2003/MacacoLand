import '../Pages/Index/index.css'
export const ProfileInfo = ({username,numberOfPost,followers,followedPets,city,userDescription}) =>{
    return (
        <div className='margin-top-info margin-left margin-bottom-25 margin-right'>
            <div className='margin-bottom-15'><span>Nombre de Usuario: {username}</span></div>
            <div className='margin-bottom-15'><span className='margin-right'>Publicaciones: {numberOfPost}</span> <span className='margin-right'>Seguidores: {followers}</span> <span>Mascotas seguidas:{followedPets}</span></div>
            <div className='margin-bottom-15'><span>Ciudad: {city}</span></div>
            <div><span>Descripcion del Usuario:{userDescription}</span></div>
        </div>
    )
}