
export default function ProfessionalCard({ profession }) {
    return (
        <div className="product-card" key={profession.id}>
            <img src={profession.image} alt="" />
            <div className="objects1">
                <div className="objectsImg"><img src="/image/photo_2026-10-29_17-32-42-removebg-preview.png" alt="jjj" /></div>
                <div className="objectsW">

                <h6>{profession.name}</h6>
                <p className="skills">{profession.skills}</p>
                <p>iiiii</p>
                <p>{profession.years}</p>
                <p>Location</p>
                <div className="btnP">

                    <button className="call">call</button>
                    <button className="whatsapp">whatsapp</button>
                </div>
                </div>
            </div>

        </div>
    );
}