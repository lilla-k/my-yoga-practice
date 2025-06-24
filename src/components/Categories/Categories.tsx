import './Categories.css';

function Categories() {

    const categories = [
        { name: "Sitting", image: "/Copilot_sitting_illustration.png" },
        { name: "Standing", image: "/Copilot_standing_illustration.png" },
        { name: "Supine", image: "/Copilot_supine_illustration.png" },
        { name: "Inversion", image: "/Copilot_inversion_illustration.png" }
    ]
    return (
        <div className="Categories">
            <h1 className="Categories-title">Categories</h1>
            <div className="Categories-container">
                {categories.map(c =>
                    <div className="Categories-card">
                        <img src={c.image} alt={c.name} className="Categories-image" />
                        <div className="Categories-name">{c.name}</div>
                    </div>
                )}
            </div>

        </div>

    )
}

export default Categories