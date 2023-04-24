import { PostList } from "./PostList"

export const ProfilePost = ({profilePost,column=false,canAdd=false}) =>{
    return(
    <div>
        <div className="d-flex justify-content-center post-tab-container margin-bottom-50" >
            <div className="post-tab"> 
                <span>Tus Publicaciones</span>
            </div>
        </div>
        <PostList profilePost={profilePost} column={column} canAdd={canAdd}/>
    </div>
    )
}