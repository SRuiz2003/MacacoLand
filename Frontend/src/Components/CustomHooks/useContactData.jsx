import { useState } from "react";

export const useContactData = ()=>{
    const [contactData] = useState({data:[{
        userImage:"data:image/jpeg;base64,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",
        username:"david_ale"
    },{
        userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNZepLsP3f0pwDiyQH59-yTmITdzA8nV58A&usqp=CAU",
        username:"simon_ruiz"
    },{
        userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpfC-1r1D-IFpsY6q_snHlHI7SQGRm-nhAg&usqp=CAU",
        username:"Ptescor"
    },{
        userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKHOxHbfcTyK9VnxDewrZN-3fq5-BRYyrabvWBBdGqlZ45826nVc9yJ7-VDKHwNcFxdY&usqp=CAU",
        username:"monito"
    }


]});

    return {contactData}

}