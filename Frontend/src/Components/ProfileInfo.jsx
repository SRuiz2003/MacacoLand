import '../Pages/Index/index.css'
export const ProfileInfo = ({username,numberOfPost,followers,followedPets,city,userDescription}) =>{
    return (
        <div className='margin-left-25'>
            <div className='margin-top-info margin-left margin-bottom-25 margin-right'>
                <div className='margin-bottom-15'><span><strong>Nombre de Usuario:</strong>{username}</span></div>
                <div className='margin-bottom-15'><span className='margin-right'><strong>Publicaciones: </strong>{numberOfPost}</span> <span className='margin-right'> <strong>Seguidores: </strong>{followers}</span> <span><strong>Mascotas seguidas:</strong>{followedPets}</span></div>
                <div className='margin-bottom-15'><span><strong>Ciudad: </strong>{city}</span></div>
                <div><span><strong>Descripcion del Usuario:</strong>{userDescription}</span></div>
            </div>
        </div>
    )
}