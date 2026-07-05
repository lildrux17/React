import React from 'react' 



const HomeItem = ({ id, title, imageUrl }) => {
     // Determine the layout based on the id
    const layout =
        id === 4 || id === 5
            ? "col-span-3 row-span-2"
            : "col-span-2";
    

    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`h-90 bg-cover bg-center flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ${layout} border`}
        >
            <div className="bg-white opacity-60 text-center p-5 hover:bg-white transition-opacity duration-300 abosolute">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="font-regular">SHOP NOW</p>
            </div>
        </div>
    );
};

export default HomeItem;

