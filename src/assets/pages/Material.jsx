import ProductCard from "../component/productCard"
import { getProducts } from "../Data/products";
export default function Material(){
    const products = getProducts();
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
                     placeholder="search materials"
                     required
                     />
                </div>

                <div className="qr">
                    {/* <h5>Qr CODE</h5> */}
                    <img src="" alt="img" />
                </div>
            </div>



            <div className="cate">

            <div className="categories">
                <div className="category">
                    <h6>Categories</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Planks</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Pipe</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Granite</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Sand</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>POP Cement</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Block</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Roofing</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Tiles</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Steel</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Iron-Rod</h6>
                </div>
                <div className="category1">
                    <img src="" alt="" />
                    <h6>Paint</h6>
                </div>
            </div>



            <div className="building-materials">
                <div className="building1">
                    <p>Building Materials <span>(124 products)</span></p>
                </div>

                <div className="building-tab">
                    {products.map((product) =>(
                        <ProductCard product={product} key={product.id}/>
                    ))}     
                </div>
            </div>
        </div>
        </div>
    )
}