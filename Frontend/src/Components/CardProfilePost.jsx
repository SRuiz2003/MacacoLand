export const CardProfilePost = () =>{
    return(
        <div className="card-container">
            <div className="card-header-container"><img src="src/assets/cardHeaderPic.svg" width="25" height="25" alt="" className="margin-left-image"/></div>
            <div className="card-body-container d-flex"><img src="src/assets/cardBodyPic.svg" width="150" height="300" alt="" /></div>
            <div className="d-flex justify-content-between card-buttons-container">
                <div>
                    <img src="src/assets/like.svg" width="20" height="20" alt="" className="margin-left-image margin-right-image"/>
                    <img src="src/assets/dislike.svg" width="20" height="20" alt="" className="margin-right-image margin-top-image"/>
                    <img src="src/assets/comment.svg" width="20" height="20" alt=""/>
                </div>
                <div><img src="src/assets/share.svg" width="20" height="20" alt="" className="margin-right-image margin-top-image"/></div>
            </div>
        </div>
    )
} 