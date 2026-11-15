import { useState } from "react";
import ProfessionalCard from "../component/ProfessionalCard";
import { getProfessions } from "../Data/products";

export default function Professional() {
  const professions = getProfessions();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = professions.filter((profession) => {
    const matchesSearch =
      profession.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profession.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      profession.skills.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="professional-page">
      <div className="material">
        <div className="build">
          <div className="link">
            <img src="" alt="" />
            <h5>ADFEN PRIME</h5>
          </div>

          <div className="search1">
            <input
              type="text"
              placeholder="search professionals..."
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
          <div className="categories">
            <div className="categories">
              <h4>Categories</h4>

              {[
                "All",
                "Civil Engineer",
                "Quantity Surveyor",
                "Architecture",
                "Builder",
                "Estate Management",
                "Land Surveyor",
              ].map((category) => (
                <div
                  className={`category1 ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  <h6>{category}</h6>
                  <span className="category-arrow"></span>
                </div>
              ))}
            </div>
          </div>

          <div className="building-materials">
            <div className="building1">
              <p>
                Skilled Professionals/Labourers
                <span>({filteredProducts.length} professionals)</span>
              </p>
            </div>

            <div className="profession-tab">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((profession) => (
                  <ProfessionalCard
                    profession={profession}
                    key={profession.id}
                  />
                ))
              ) : (
                <p>No Professional Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
