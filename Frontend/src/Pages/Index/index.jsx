import { useUserProfileData } from "../../Components/CustomHooks/useUserProfileData"
import { ProfilePic } from "../../Components/ProfilePic";
import { SearchBar } from "../../Components/SearchBar";
import { YourProfile } from "../../Components/YourProfile";

export const Index = () =>{
  const {profileData} = useUserProfileData('user123');
  return(
    <div className="background-profile d-flex padding-block-15">
        <div>
          <ProfilePic src={profileData.data.image} width={'150px'}/>
          <YourProfile/>
        </div>
        <SearchBar/>
    </div>
  )
}