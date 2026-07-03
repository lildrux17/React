import React from "react";
import { Card } from "./card.component";
import { Search } from "./search.component";

export const CardList = (props) =>{
    return (

        <div className="container mx-auto px-4 py-8">
                    {/* tiltle */}
                    <h1 className="text-center text-4xl text-[#0ccac4] font-bold font-heading text-6xl text-bold mb-10">Monsters Rolodex</h1>
                   {/* search */}                   
                   <div className="flex justify-center mb-10">
                        <Search onSearchChange={props.onSearchChange} />
                   </div>
                   {/* card-grids */}
                    <div className="grid grid-cols-4 gap-5">
                        {
                            // monsters
                            props.monsters.map(
                            (monster)=>{return(
                                    <Card key ={monster.id} monster={monster} />
                                )}) 
                        }
                    </div>
        </div>
        
    )
}