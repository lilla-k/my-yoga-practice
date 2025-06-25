import { Link } from 'react-router';
import './Categories.css';

function Categories() {

    const categories = [
        { name: "sitting", image: "/Copilot_sitting_illustration.png" },
        { name: "standing", image: "/Copilot_standing_illustration.png" },
        { name: "supine", image: "/Copilot_supine_illustration.png" },
        { name: "inversion", image: "/Copilot_inversion_illustration.png" }
    ]
    return (
        <div className="Categories">
            <h1 className="Categories-title">Categories</h1>
            <div className="Categories-container">
                {categories.map(c =>
                    <Link to={`/yoga-poses/${c.name}`} className="Categories-card">
                        <img src={c.image} alt={c.name} className="Categories-image" />
                        <div className="Categories-name">{c.name}</div>
                    </Link>
                )}
            </div>

        </div>

    )
}

export default Categories