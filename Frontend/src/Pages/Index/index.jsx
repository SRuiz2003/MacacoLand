import { Banana } from "../../Components/Banana";
import { Contacts } from "../../Components/Contacts";
import { useContactData } from "../../Components/CustomHooks/useContactData";
import { useFeedData } from "../../Components/CustomHooks/useFeedData";
import { useUserProfileData } from "../../Components/CustomHooks/useUserProfileData"
import { PostList } from "../../Components/PostList";
import { ProfilePic } from "../../Components/ProfilePic";
import { SearchBar } from "../../Components/SearchBar";
import { YourProfile } from "../../Components/YourProfile";
import TokenContext from '../../Components/CustomHooks/TokenContext';
import { useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export const Index = () =>{
  const {profileData} = useUserProfileData('user123');
  const {feedData} = useFeedData();
  const{contactData} = useContactData();
  const navigate = useNavigate();
    const { token, updateToken } = useContext(TokenContext);
    useEffect(() => {
      if (token === '') {
        alert("Por favor inicie sesion")
        navigate('/Login');
      }
    }, [token, navigate]);
  return(
    <div className="background-profile row ">
        <div className="col padding-block-15">
          <ProfilePic src={profileData.data.image} width={'150px'}/>
          <YourProfile/>
        </div>
        <div className="col">
          <Banana/>
          <SearchBar/>
          <PostList profilePost = {feedData.data} column={true}/>
        </div>
        <div className="col"> 
            <Contacts 
              contactList={contactData.data}
            />
        </div>
    </div>
  )
}