import { useState } from "react";
import { getProducts } from "../Data/products";
import { useNavigate } from "react-router-dom";


export default function CategoryList() {
  const [openCategory, setOpenCategory] = useState(null);

  const products = getProducts();
  const navigate = useNavigate();

  const categories = [
    "Cement",
    "Blocks",
    "Iron Rods",
    "Steep-Slope Roofing Materials",
    "Low-Slope/Flat Roofing Materials",
    "Sand",
    "Paint",
    "Plumbing Materials",
    "Electrical Materials",
  ];

  return (
    <div className="category-list">
      <h3>Product Categories</h3>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) =>
            product.category?.toLowerCase() === category.toLowerCase()
        );

        return (
          <div className="category-item" key={category}>
            <button
              className="category-button"
              onClick={() =>
                setOpenCategory(
                  openCategory === category ? null : category
                )
              }
            >
              <span>{category}</span>

              <span>
                {openCategory === category ? "▼" : "▶"}
              </span>
            </button>

            {openCategory === category && (
              <div className="category-products">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product) => (
                    <button
                      className="category-product"
                      key={products.id}
                      onClick={() =>
                        navigate(`/product/${product.id}`)
                      }
                    >
                      {product.name}
                    </button>
                  ))
                ) : (
                  <p>No products available in this category.</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}