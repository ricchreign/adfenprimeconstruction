import {Link} from "react-router-dom"

export default function ProductCard({ product }) {
    return (
        <div className="product-card" key={product.id}>
            <div className="objects1">
                <img src="{product.image}" alt="img" />
                <h6>{product.name}</h6>
                <p>${product.price}</p>
                
             <div className="product-button">
             <button>Add to Cart</button>
             <button>View Details</button>
             </div>

                
            </div>


        </div>
    );
}



