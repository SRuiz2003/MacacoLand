import { ProfilePic } from "./ProfilePic"
export const CardProfilePost = ({image,likes,dislikes,comments,userImage,username,userDescription}) =>{
    return(
        <div className="card-container">    
            <div className="card-header-container"><ProfilePic src={userImage} width={"20px"} />{username&&<span>{username}</span>}{userDescription&&<span>{userDescription}</span>} </div>
            <div className="card-body-container d-flex"><img src={image} width="300" height="300" alt="" /></div>
            <div className="d-flex justify-content-between card-buttons-container">
                <div>
                    <img src="src/assets/like.svg" width="20" height="20" alt="" className="margin-left-image margin-right-image"/><span>{likes}</span>
                    <img src="src/assets/dislike.svg" width="20" height="20" alt="" className="margin-right-image margin-top-image"/><span>{dislikes}</span>
                    <img src="src/assets/comment.svg" width="20" height="20" alt=""/><span>{comments}</span>
                </div>
                <div><img src="src/assets/share.svg" width="20" height="20" alt="" className="margin-right-image margin-top-image"/></div>
            </div>
        </div>
    )
} 