function MainSearch(props) {

    return (
        <div className="search-container">
            <label htmlFor="search">Search Existing Bikes by Name</label>
            <input 
                type="text" 
                name="name" 
                // id="search" 
                onChange={props.filterBikes}
            />
        </div>
    )
}
 export default MainSearch