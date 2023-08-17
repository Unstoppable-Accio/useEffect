import React,{useState, useEffect} from "react";

// Generte an array of 40 counties, in an array

const countries  = [
    "India", "United States", "China", "Brazil", "Russia", 
    "Australia", "Canada", "Germany", "United Kingdom", "France", 
    "Italy", "Spain", "Mexico", "Japan", "South Korea", 
    "Indonesia", "Saudi Arabia", "Turkey", "South Africa", "Egypt", 
    "Argentina", "Sweden", "Switzerland", "Netherlands", "Belgium", 
    "Poland", "Ukraine", "Greece", "Portugal", "Austria", 
    "Norway", "Denmark", "Finland", "Ireland", "New Zealand", 
    "Singapore", "Malaysia", "Vietnam", "Chile", "Czech Republic", 
    "Philippines", "Thailand", "Israel", "Pakistan", "Bangladesh", 
    "Romania", "Nigeria", "Colombia", "Venezuela", "Peru", 
    "Hungary", "Jordan", "Kenya", "Croatia", "Slovenia", 
    "Estonia", "Iceland", "Latvia", "Lithuania", "Luxembourg", 
    "Slovakia", "Sri Lanka", "Nepal", "Qatar", "Oman", 
    "Lebanon", "Cyprus", "Kuwait", "Bahrain", "Fiji", 
    "Armenia", "Mauritius", "Malta", "Jamaica", "Panama", 
    "Uruguay", "Ecuador", "Costa Rica", "Bolivia", "El Salvador", 
    "Honduras", "Paraguay", "Nicaragua", "Guatemala", "Haiti"
]

// let x = 100


const LiveSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries)


    useEffect(() => {
        filterCountries()
    }, [searchTerm]
    )


    const filterCountries = () => {
          let x = countries.filter((country) =>  country.toLowerCase().includes(searchTerm.toLowerCase())==true)
          setFilteredCountries(x)
          
    }
    
        return(
            <div>
                 <input type="text" placeholder="" 
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}
                 />
                 {/* <button onClick={filterCountries}>Search</button> */}


               <div className="countries">
                 {
                        filteredCountries.map((country) => (
                            <p>{country}</p> 
                            // highlight the search term in the country name
                        ))
                 }
                 </div>
            </div>
        )
}

export default LiveSearch;


// "India", "United States", "China", "Brazil", "Russia",


//