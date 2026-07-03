import React from "react";


export const Card = (props)=>{
    return(
        <div className="text-center text-2xl font-bold  py-20 border hover:scale-105 transition duration-200 bg-[#0ccac4] rounded-xl">
            <div className="flex justify-center mb-5">
                <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            </div>
            <h1>{props.monster.name}</h1>
            <p className="font-light text-[16px]">{props.monster.email}</p> 
        </div>
    )
}