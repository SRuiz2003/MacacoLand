export const SearchContactBar = () =>{
    return(
        <div>
            <div className="search-contact-bar-container fit-content">

                <div className="search-icon-container">
                        <img src="src/assets/search.svg" className="search-button" height='25px'/> 
                </div>
                <input type="text" placeholder="Contactos" className="input-search-bar"/>
            </div>
        </div>
    )
}
