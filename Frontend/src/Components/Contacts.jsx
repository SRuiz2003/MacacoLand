import { ContactList } from "./ContactList"
import { SearchContactBar } from "./SearchContactBar"

export const Contacts = ({contactList}) =>{
    return(
        <div>
            <div>
                <SearchContactBar/>
                <ContactList contactList={contactList}/>
            </div>
        </div>
    )
}