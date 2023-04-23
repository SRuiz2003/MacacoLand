import { ProfileInfo } from '../../Components/ProfileInfo'
import { ProfilePic } from '../../Components/ProfilePic'
import { ProfilePost } from '../../Components/ProfilePost'

  export const Profile= ()=>{
    return (
      <div className='background-profile'>
          <div className='d-flex'>
              <ProfilePic/> 
              <ProfileInfo/>
          </div>
          <ProfilePost/>
      </div>
   )
  }

