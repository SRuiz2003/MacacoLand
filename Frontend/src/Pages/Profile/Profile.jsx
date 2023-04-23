import { useUserProfileData } from '../../Components/CustomHooks/useUserProfileData'
import { ProfileInfo } from '../../Components/ProfileInfo'
import { ProfilePic } from '../../Components/ProfilePic'
import { ProfilePost } from '../../Components/ProfilePost'

  export const Profile= ()=>{
    const {profileData} = useUserProfileData('user123');
    console.log(profileData)
    return (
      <div className='background-profile'>
          <div className='d-flex'>
              <ProfilePic src={profileData.data.image}/> 
              <ProfileInfo 
                username={profileData.data.username}
                numberOfPost={profileData.data.numberOfPost}
                followers={profileData.data.followers}
                followedPets={profileData.data.followedPets}
                city={profileData.data.city}
                userDescription={profileData.data.userDescription}
              />
          </div>
          <ProfilePost/>
      </div>
   )
  }

