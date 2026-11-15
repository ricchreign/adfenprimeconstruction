const products = [
    {
        id : 1,
        name : "Dangote Cement",
        category : "Cement",
        price : "15000.00",
        image : "/image/cement.jpg",
    },
    {
        id : 2,
        name : "BUA Cement",
        category : "Cement",
        price : "15000.00",
        image : "/image/cement.jpg",
    },
    {
        id : 3,
        name : "Lafarge Cement",
        category : "Cement",
        price : "15000.00",
        image : "/image/cement.jpg",
    },
    {
        id : 4,
        name : "6-Inch Blocks(150mm)",
        category : "Blocks",
        price : "400",
        image : "/image/block.jpg",
    },
    {
        id : 5,
        name : "9-Inch Blocks(255mm)",
        category : "Blocks",
        price : "400",
        image : "/image/block.jpg",
    },
    {
        id : 6,
        name : "8mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 7,
        name : "10mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 8,
        name : "12mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 9,
        name : "16mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 10,
        name : "20mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 11,
        name : "25mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 12,
        name : "32mm Iron Rod",
        category : "Iron Rods",
        price : "4500",
        image : "/image/iron rod.jpg",
    },
    {
        id : 13,
        name : "River Sand",
        category : "Sand",
        price : "20000",
        image : "/image/sand.jpg",
    },
    {
        id : 14,
        name : "Manufactured Sand",
        category : "Sand",
        price : "20000",
        image : "/image/sand.jpg",
    },
    {
        id : 15,
        name : "Pit Sand",
        category : "Sand",
        price : "20000",
        image : "/image/sand.jpg",
    },
    {
        id : 16,
        name : "Sea Sand",
        category : "Sand",
        price : "20000",
        image : "/image/sand.jpg",
    },
    {
        id : 17,
        name : "Ashalt Shingles",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 18,
        name : "Metal Roofing",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 19,
        name : "Clay and Concrete Tiles",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 20,
        name : "Slate Tile",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 21,
        name : "Wood Shingles and Shakes",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 22,
        name : "Solar Roof Tiles",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 23,
        name : "Green/Living Roofs",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 24,
        name : "Thatch",
        category : "Steep-Slope Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 25,
        name : "Membrane",
        category : "Low-Slope/Flat Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 26,
        name : "Built-Up Roofing (BUR)",
        category : "Low-Slope/Flat Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 27,
        name : "Modified Bitumen",
        category : "Low-Slope/Flat Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 28,
        name : "Liquid-Applied Systems",
        category : "Low-Slope/Flat Roofing Materials",
        price : "5000" ,
        image : "/image/roofing.jpg",
    },
    {
        id : 29,
        name : "Finecoat Paint (Big Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 30,
        name : "Finecoat Paint (Small Size)",
        category : "Paint",
        price : "10000",
        image : "/image/bp-removebg-preview.png",
    },
    {
        id : 31,
        name : "Dulux(Kaplux/UAC) (Big Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 32,
        name : "Dulux(Kaplux/UAC) (Small Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 33,
        name : "Berger Paints (Big Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 34,
        name : "Berger Paint (Small Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 35,
        name : "Sandtex (Big Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 36,
        name : "Sandtex (Small Size)",
        category : "Paint",
        price : "10000",
        image : "/image/paint.jpg",
    },
    {
        id : 37,
        name : "Tiles",
        category : "Tiles",
        price : "10000",
        image : "/image/tiles.jpg",
    },
    {
        id : 38,
        name : "granite",
        price : "10000",
        image : "/image/granite.jpg",
    },
    {
        id : 39,
        name : "Plank",
        price : "10000",
        image : "/image/plank.jpg",
    },
    {
        id : 40,
        name : "Nails",
        price : "10000",
        image : "/image/nail.jpg",
    },
    {
        id : 41,
        name : "Pop Cement",
        price : "10000",
        image : "",
    },
    {
        id : 42,
        name : "Steel",
        price : "10000",
        image : "",
    }
  
  
   
]


const professions = [
    {
        id : 1,
        name : "Engr. Tunde",
        skills : "Civil Engineer",
        years : " 6+ Years Experience",
        image : "",
        
    },
    {
        id : 2,
        name : "QS. Seyi",
        skills : "Quantity Surveyor",
        years : " 5+ Years Experience",
        image : "",
    },
    {
        id : 3,
        name : "Architect. Fumbi",
        skills : "Architecture",
        years : " 8+ Years Experience",
        image : "",
    },
    {
        id : 4,
        name : "Builder. Pelumi",
        skills : "Builder",
        years : " 6+ Years Experience",
        image : "",
    },
    {
        id : 5,
        name : "Est. Yaya",
        skills : "Estate Management",
        years : " 6+ Years Experience",
        image : "",
    },
]

export function getProducts(){
    return products;
}

export function getProfessions(){
    return professions;
}


export function getProductById(id){
    return products.find((p) => p.id === Number(id));
}


export function getProfessionById(id){
    return professions.find((p) => p.id === Number(id));
}