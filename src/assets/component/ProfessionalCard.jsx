
export default function ProfessionalCard({ profession }) {
    return (
        <div className="product-card" key={profession.id}>
            <img src="{profession.image}" alt="" />
            <div className="objects1">
                <h6>{profession.name}</h6>
                <p>{profession.skills}</p>
                <p>{profession.years}</p>
            </div>

        </div>
    );
}