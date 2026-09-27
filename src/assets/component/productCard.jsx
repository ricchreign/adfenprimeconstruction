import {Link} from "react-router-dom"


export default function ProductCard({ product }) {
    return (
        <div className="product-card" key={product.id}>
            <div className="objects1">
                <img src="{product.image}" alt="img" />
                <h6>{product.name}</h6>
                <p>#{product.price}</p>
                
             <div className="product-button">
              <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details </Link>
                    <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
             </div>

                
            </div>


        </div>
    );
}



