import { useUserProfileData } from '../../Components/CustomHooks/useUserProfileData'
import { ProfileInfo } from '../../Components/ProfileInfo'
import { ProfilePic } from '../../Components/ProfilePic'
import { ProfilePost } from '../../Components/ProfilePost'
import {useNavigate} from 'react-router-dom'
import TokenContext from '../../Components/CustomHooks/TokenContext';
import { useContext, useEffect } from 'react'
  export const Profile= ()=>{
    const {profileData} = useUserProfileData('user123');
    const navigate = useNavigate();
    const { token, updateToken } = useContext(TokenContext);
    useEffect(() => {
      if (token === '') {
        alert("Por favor inicie sesion")
        navigate('/Login');
      }
    }, [token, navigate]);
      return (
        <div className='background-profile'>
            <div className='d-flex padding-block-15'>
                <ProfilePic src={profileData.data.image} width={'200px'}/> 
                <ProfileInfo 
                  username={profileData.data.username}
                  numberOfPost={profileData.data.numberOfPost}
                  followers={profileData.data.followers}
                  followedPets={profileData.data.followedPets}
                  city={profileData.data.city}
                  userDescription={profileData.data.userDescription}
                />
            </div>
            <ProfilePost profilePost={profileData.data.posts}
                         canAdd={true}         
            />
        </div>
     )
    
   
  }

