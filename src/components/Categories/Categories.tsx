import { Link } from 'react-router';
import './Categories.css';
import categories from '../../categories.ts';

function Categories() {

    return (
        <div className="Categories">
            <h1 className="Categories-title">Categories</h1>
            <div className="Categories-container">
                {categories.map(c =>
                    <Link to={`/yoga-asanas/${c.name}`} className="Categories-card">
                        <img src={c.image} alt={c.name} className="Categories-image" />
                        <div className="Categories-name">{c.name}</div>
                    </Link>
                )}
            </div>

        </div>

    )
}

export default Categories