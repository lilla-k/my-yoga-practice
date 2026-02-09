import { useParams, useNavigate } from 'react-router';
import AsanasFilter from '../AsanasFilter/AsanasFilter.tsx';
import AsanasList from '../AsanasList/AsanasList.tsx';
import './AsanasPage.css';

function AsanasPage() {

    const { selectedCategory } = useParams();
    const navigate = useNavigate();
    return (
        <div className="AsanasPage">
            <h1 className="AsanasPage-title">Asanas</h1>
            <AsanasFilter/>
            {selectedCategory && <AsanasList/>}
        </div>
    )
}

export default AsanasPage;