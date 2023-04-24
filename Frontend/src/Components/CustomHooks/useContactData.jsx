import { useState } from "react";

export const useContactData = ()=>{
    const [contactData] = useState({data:[{
        userImage:"",
        username:""
    },{
        userImage:"",
        username:""
    },{
        userImage:"",
        username:""
    },{
        userImage:"",
        username:""
    }


]});

    return contactData

}