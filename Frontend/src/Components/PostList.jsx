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
        </div>
    )
}