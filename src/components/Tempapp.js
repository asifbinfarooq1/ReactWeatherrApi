import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city,setCity] = useState("Lahore");
    const [search,setSearch] = useState("Lahore");

    useEffect (() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=afd43b9cb33c7e99f0cdd17ced0c16e9&units=metric`
                const response = await fetch(url);
               
                const reJason = await response.json();
                // console.log(reJason)
                setCity(reJason.main)
        }
        
        
        
        
        fetchApi();
    }, [search] )

return(

<>

<div className="box">
    <div className="input">
    <input type="search" className="inputField" 
    onChange={(event)=>{ setSearch(event.target.value) }}/>
    </div>
    {!city ? (
            <p className="errorMsg">No data Found</p>
        ) : (
            <div>
<div className="info">
<h2 className="location"> {search} </h2>
<h1 className="temp">{city.temp}° C</h1>
<h3 className="temin_max"> min : {city.temp_min}° C| max : {city.temp_max}° C</h3>
</div>
            </div>
        )
    }


<div className="wave -one"></div>
<div className="wave -two"></div>
<div className="wave -three"></div>





</div>
</>



)

}
export default Tempapp;