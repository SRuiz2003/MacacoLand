import { Banana } from "../../Components/Banana";
import { CardProfilePost } from "../../Components/CardProfilePost";
import { useUserProfileData } from "../../Components/CustomHooks/useUserProfileData"
import { ProfilePic } from "../../Components/ProfilePic";
import { SearchBar } from "../../Components/SearchBar";
import { YourProfile } from "../../Components/YourProfile";

export const Index = () =>{
  const {profileData} = useUserProfileData('user123');
  return(
    <div className="background-profile row padding-block-15">
        <div className="col">
          <ProfilePic src={profileData.data.image} width={'150px'}/>
          <YourProfile/>
        </div>
        <div className="col">
          <Banana/>
          <SearchBar/>
          <CardProfilePost column={true}/>
        </div>
        
    </div>
  )
}