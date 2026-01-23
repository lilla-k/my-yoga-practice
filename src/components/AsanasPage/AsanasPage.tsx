import { useParams, useNavigate } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AsanasList from '../AsanasList/AsanasList.tsx';
import './AsanasPage.css';

function AsanasPage() {

    const { selectedCategory } = useParams();
    const navigate = useNavigate();
    const categories = ["all", "sitting", "standing", "supine", "inversion"]
    return (
        <div className="AsanasPage">
            <h1 className="AsanasPage-title">Asanas</h1>
            <Tabs
                value={selectedCategory}
                onChange={(e:  React.SyntheticEvent, newValue: string) => navigate(`/yoga-asanas/${newValue}`)}
                aria-label="secondary tabs example"
            >
                {categories.map(c =>
                    <Tab value={c} label={c} />
                )}
            </Tabs>
            {selectedCategory && <AsanasList/>}
        </div>
    )
}

export default AsanasPage;