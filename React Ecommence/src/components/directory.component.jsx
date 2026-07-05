import React from 'react'
import categories from './categories.js'
import HomeItem from './home-item.component'

const Directory = () =>{
    return (
        <div className="grid grid-cols-6 gap-4 justify-center items-center">
            {categories.map((category) =>{
                return <HomeItem key={category.id} title={category.title} imageUrl={category.imageUrl}/>
            })}
        </div>
    )
}

export default Directory