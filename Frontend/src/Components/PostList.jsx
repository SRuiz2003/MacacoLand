import { CardProfilePost } from "./CardProfilePost"

export const PostList = ({profilePost,column=false,canAdd=false})=>{
    return(
        <div className={"d-flex card-list-container " + (column ? "flex-column justify-content-center m-auto" : "")}>
            {
                profilePost.map((post,key)=>{
                    return <CardProfilePost key={key} 
                        image ={post.image}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        comments={post.comments}
                        userImage={post.userImage}
                        username={post.username}
                        userDescription={post.userDescription}
                    /> 
                })
            }
            {canAdd&&<div className="add-post-button margin-left-image">
                <div>
                    <img src="src/assets/add.svg"></img> <input type="file" className="add-post-input-file"></input>
                </div>
            </div>}
        </div>
    )
}