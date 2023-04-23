import { useState } from "react"
export const useUserProfileData = (userId) =>{

    const [profileData] = useState({data: {
        image: 'https://w0.peakpx.com/wallpaper/655/385/HD-wallpaper-pin-em-foto-macaco.jpg',
        username: 'pepe_2003',
        numberOfPost: 2,
        followers: 2500,
        followedPets: 300,
        city: 'Cali',
        userDescription: 'Soy jugador de LoL',
        posts: [{
            image: 'data:image/jpeg;base64,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',
            likes: 500,
            dislikes: 2,
            comments:1

        },
        {
            image: 'https://e1.pxfuel.com/desktop-wallpaper/755/979/desktop-wallpaper-pin-em-h-macaco-thumbnail.jpg',
            likes: 5000,
            dislikes: 200,
            comments:3
        },{},{},{}
        
    ]}

    })
    return{
        profileData
    }
}
