export const SearchBar = () =>{
    return(
        <div className="search-bar-container fit-content margin-bottom-50">
            <div className="search-icon-container">
                    <img src="src/assets/search.svg" className="search-button" height='25px'/> 
            </div>
            <input type="text" placeholder="Buscar En MacacoIsland" className="input-search-bar"/>
        </div>
    )
}