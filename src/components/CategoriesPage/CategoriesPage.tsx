import { Link } from 'react-router';
import './CategoriesPage.css';
import categories from '../../categories.ts';

function CategoriesPage() {

    return (
        <div className="CategoriesPage">
            <h1 className="CategoriesPage-title">Categories</h1>
            <div className="CategoriesPage-container">
                {categories.map(c =>
                    <Link to={`/yoga-asanas/${c.name}`} className="CategoriesPage-card">
                        <img src={c.image} alt={c.name} className="CategoriesPage-image" />
                        <div className="CategoriesPage-name">{c.name}</div>
                    </Link>
                )}
            </div>

        </div>

    )
}

export default CategoriesPage;