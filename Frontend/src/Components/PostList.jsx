import { CardProfilePost } from "./CardProfilePost"
import { useState } from "react";

export const PostList = ({profilePost,column=false,canAdd=false})=>{
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageUpload = (event) =>{
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    }
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
            {canAdd&&(<div className="add-post-button margin-left-image">
                <div>
                    <img src="src/assets/add.svg" alt="Add Post"></img> 
                    <input type="file" className="add-post-input-file" onChange={handleImageUpload}></input>
                </div>
            </div>)}
            {selectedImage&&(
                <div>
                    <img src={selectedImage} alt="Selected-Image"/>
                </div>
            )}
        </div>
    )
}