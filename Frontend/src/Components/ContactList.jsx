import {ContactCard} from './ContactCard'
export const ContactList = ({contactList}) =>{
    console.log(contactList)
    return(
        <div className='justify-content-end d-flex'>
            <div className='width-300'>
                {
                    contactList.map((contact,key)=>{
                        return(
                            <ContactCard key={key}
                            userImage={contact.userImage}
                            username={contact.username}
                            />
                        )
                            
                        
                    })
                }
            </div>
        </div>
    )
}