import ProfessionalCard from "../component/ProfessionalCard"
import { getProfessions } from "../Data/products";
export default function Professional(){
    const professions = getProfessions();
    
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
                                 placeholder="search professionals"
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
                                <h6>Civil Engineer</h6>
                            </div>
                            <div className="category1">
                                <img src="" alt="" />
                                <h6>Quantity Surveyor</h6>
                            </div>
                            <div className="category1">
                                <img src="" alt="" />
                                <h6>Architect</h6>
                            </div>
                            <div className="category1">
                                <img src="" alt="" />
                                <h6>Builder</h6>
                            </div>
                            <div className="category1">
                                <img src="" alt="" />
                                <h6>Est. Manager</h6>
                            </div>
                            <div className="category1">
                                <img src="" alt="" />
                                <h6>Land Surveyor</h6>
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
                                <p>Skilled Professionals/Labourers  <span>(74 professionals)</span></p>
                            </div>
            
                            <div className="profession-tab">
                                {professions.map((profession) =>(
                                    <ProfessionalCard profession={profession} key={profession.id}/>
                                ))}     
                            </div>
                        </div>
                    </div>
                    </div>
                
        </div>
    )
    
}