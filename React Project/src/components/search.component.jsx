import React from "react";

export const Search =(props)=>{
    return(
        <input type="search" placeholder="Search monsters..." name="" id="#" className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 " onChange = { props.onSearchChange } />
    )
}