import { useState } from "react";
import ProductCard from "../component/productCard";
import { getProducts } from "../Data/products";
import CategoryList from "./CategoryList";

export default function Material() {
  const products = getProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="material">
      <div className="build">
        <div className="link">
          <img src="" alt="" />
          <h5>ADFEN PRIME</h5>
        </div>

        <div className="search1">
          <input
            type="text"
            placeholder="search materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="qr">
          {/* <h5>Qr CODE</h5> */}
          <img src="" alt="img" />
        </div>
      </div>
      <hr />

      <div className="cate">
        <CategoryList />

        <div className="building-materials">
          <div className="building1">
            <p>
              Building Materials{" "}
              <span>({filteredProducts.length} products)</span>
            </p>
          </div>

          <div className="building-tab">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  img
                  src={product.image}
                />
              ))
            ) : (
              <p>No materials found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
