import { CardProfilePost } from "./CardProfilePost"

export const PostList = ({profilePost,userImage,username,userDescription,column=false})=>{
    return(
        <div className={"d-flex card-list-container " + (column ? "flex-column" : "")}>
            {
                profilePost.map((post,key)=>{
                    return <CardProfilePost key={key} 
                        image ={post.image}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        comments={post.comments}
                        userImage={userImage}
                        username={username}
                        userDescription={userDescription}
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