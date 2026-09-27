const products = [
    {
        id : 1,
        name : "Cement",
        price : "15,000",
        image : "",
    },
    {
        id : 2,
        name : "Blocks",
        price : "400",
        image : "",
    },
    {
        id : 3,
        name : "Iron Rod",
        price : "4500 / piece",
        image : "",
    },
    {
        id : 4,
        name : "Sand",
        price : "20,000",
        image : "",
    },
    {
        id : 5,
        name : "Roofing",
        price : "5,000" ,
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
    {
        id : 6,
        name : "Paint",
        price : "10,000",
        image : "",
    },
]


const professions = [
    {
        id : 1,
        name : "Engr. Tunde",
        skills : "Civil ENgineer",
        years : "6+ years",
    },
    {
        id : 2,
        name : "QS. Seyi",
        skills : "Quantity Surveyor",
        years : "5+ years",
    },
    {
        id : 3,
        name : "Architect. Fumbi",
        skills : "Architecture",
        years : "8+ years",
    },
    {
        id : 4,
        name : "Builder. Pelumi",
        skills : "Builder",
        years : "6+ years",
    },
    {
        id : 5,
        name : "Est. Yaya",
        skills : "Estate Management",
        years : "6+ years",
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