import { CardProfilePost } from "./CardProfilePost"

export const ProfilePost = () =>{
    return(
    <div>
        <div className="d-flex justify-content-center post-tab-container margin-bottom-50" >
            <div className="post-tab"> 
                <span>Tus Publicaciones</span>
            </div>
        </div>
        <CardProfilePost/>
    </div>
    )
}