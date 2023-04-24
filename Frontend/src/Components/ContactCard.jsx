import { ProfilePic } from "./ProfilePic"

export const ContactCard = ({userImage,username}) =>{
    return(
        <div className="card-contacts-container">
            <div className="padding-5 d-flex align-items-center">
                    <div className="margin-right-15">
                        <ProfilePic src={userImage} width={'50px'} height={'50px'}/>
                    </div>
                <span>{username}</span>
            </div>
        </div>
    )
}