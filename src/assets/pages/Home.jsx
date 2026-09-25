import ProductCard from "../component/productCard"
import ProfessionCard from "../component/ProfessionalCard"
import { getProducts } from "../Data/products"
import { getProfessions } from "../Data/products"
import { Link } from "react-router-dom"
import Material from "./Material"

export default function Home(){
    const products = getProducts();
    const professionals = getProfessions();
    return (

        <div className="home-page">
            <div className="home-page1">

            <div className="home-write">
                <h1>Everything You Need For A Successful 
                    Construction Project
                </h1>

                <h4>
                    Buy building materials, find skilled labourers
                    and connect with trusted construction professionals
                    all in one place.
                </h4>

                <div className="search">
                    <input
                     type="text"
                     placeholder="search for materials, labourers, professionals....."
                     required
                     />
                     <button>SEARCH</button>
                </div>
            </div>

            <div className="home-image">
                <img src="" alt="home" />
            </div>
            </div>

            <div className="home-page2">
                <div className="browse">
                    <h5>Browse by Category</h5>
                    <Link to="/material">
                        <h5>View All</h5>
                    </Link>
                    
                </div>
               
                <div className="objects">
                    {/* <Link to="/material" className="objects"> */}
                    {/* <Link to="/material" className="objects">
                 {products.map((product) =>(
                     <ProductCard product={product} key={product.id}/>
                    ))}
                    </Link> */}
                    <div className="object">

                        <img src="/" alt="cement" />
                        <h6>Cement</h6>
                        <p>#15,000 / bag</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div>
                    <div className="object">
                        <img src="" alt="Blocks" />
                        <h6>Blocks</h6>
                        <p>400 / piece</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div>
                    <div className="object">
                        <img src="" alt="Iron Rod" />
                        <h6>Iron Rod</h6>
                        <p>#4500 / piece</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div>
                    <div className="object">
                        <img src="" alt="Sand" />
                        <h6>Sand</h6>
                        <p>#20,000 / ton</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div>
                    <div className="object">
                        <img src="" alt="Roofing" />
                        <h6>Roofing</h6>
                        <p>#5,000 / sheet</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div>
                    <div className="object">
                        <img src="" alt="Paint" />
                        <h6>Paint</h6>
                        <p>#10,000 / bucket</p>
                        <Link to="/material">
                        <button to="/material">View Details</button>
                        </Link>
                    </div> 
                    {/* </Link> */}
                </div>
            </div>

            <div className="featured">
                <div className="feature">
                    <h4>Featured Professionals</h4>
                     <Link to="/Professional">
                        <h5>View All</h5>
                    </Link>
                </div>

                <div className="professionals">
                    {professionals.map((profession) =>(
                        <ProfessionCard profession={profession} key={profession.id}/>
                ))}
                    {/* <div className="prof">
                        <img src="" alt="prof" />
                        <h5>Engr. Tunde</h5>
                        <h6>Civil Engineer</h6>
                        <h6>6+years</h6>
                        
                    </div>
                    <div className="prof">
                        <img src="" alt="prof" />
                        <h5>QS. Seyi</h5>
                        <h6>Quantity Surveyor</h6>
                        <h6>5+years</h6>
                        
                    </div>
                    <div className="prof">
                        <img src="" alt="prof" />
                        <h5>Architect. Fumbi</h5>
                        <h6>Architecture</h6>
                        <h6>8+years</h6>
                        
                    </div>
                    <div className="prof">
                        <img src="" alt="prof" />
                        <h5>Builder. Pelumi</h5>
                        <h6>Builder</h6>
                        <h6>6+years</h6>
                        
                    </div>
                    <div className="prof">
                        <img src="" alt="prof" />
                        <h5>Est. Yaya</h5>
                        <h6>Estate Management</h6>
                        <h6>6+years</h6>
                        
                    </div> */}
                </div>
            </div>

            <div className="board">
                <div className="build">
                    <div className="build1">
                        <h3>Let's Build a Better Tomorrow</h3>
                        <p>Join Thousands of Nigerians Building with confidence</p>
                    </div>
                    <button>Get Started</button>
                </div>
                    <hr />

                <div className="build-link">
                    <div className="build-link1">
                        <img src="" alt="i" />
                        <div className="link">
                            <h5>ADFEN</h5>
                            <p>Building Something</p>
                        </div>
                    </div>

                    <div className="quick">
                        <h5>Quick Links</h5>
                        <h6>Home</h6>
                        <h6>Materials</h6>
                        <h6>Labourers</h6>
                        <h6>Professionals</h6>
                        <h6>About Us</h6>
                        <h6>Contact</h6>
                    </div>

                    <div className="support">
                        <h5>Support</h5>
                        <h6>Help Center</h6>
                        <h6>Terms of Service</h6>
                        <h6>Privacy Policy</h6>
                        <h6>FAQn</h6>
                    </div>

                    <div className="social">
                        <p>Follow Us</p>
                        <a href="">fb</a>
                        <a href="">x</a>
                        <a href="">tt</a>
                        <a href="">yt</a>
                    </div>
                    
                </div>
                <hr />
            </div>



            
        </div>


    ) 
}