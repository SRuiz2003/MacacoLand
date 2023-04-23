import { CardProfilePost } from "./CardProfilePost"

export const PostList = ({profilePost,userImage})=>{
    return(
        <div className="d-flex card-list-container">
            {
                profilePost.map((post,key)=>{
                    return <CardProfilePost key={key} 
                        image ={post.image}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        comments={post.comments}
                        userImage={userImage}
                    /> 
                })
            }
            <div className="add-post-button margin-left-image">
                <div>
                    <img src="src/assets/add.svg"></img> <input type="file" className="add-post-input-file"></input>
                </div>
            </div>
        </div>
    )
}