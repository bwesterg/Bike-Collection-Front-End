function MainSearch(props) {

    return (
        <div className="search-container">
            <label htmlFor="search">Search by name</label>
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