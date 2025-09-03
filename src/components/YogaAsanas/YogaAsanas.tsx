import { useParams, useNavigate } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './YogaAsanas.css'

function YogaAsanas() {

    const { category } = useParams();
    const navigate = useNavigate();
    console.log(category);
    const categories = [
        { name: "sitting", image: "/Copilot_sitting_illustration.png" },
        { name: "standing", image: "/Copilot_standing_illustration.png" },
        { name: "supine", image: "/Copilot_supine_illustration.png" },
        { name: "inversion", image: "/Copilot_inversion_illustration.png" }
    ]
    return (
        <div className="YogaAsanas">
            <h1 className="YogaAsanas-title">Asanas</h1>
            <Tabs
                value={category}
                onChange={(e:  React.SyntheticEvent, newValue: string) => navigate(`/yoga-asanas/${newValue}`)}
                aria-label="secondary tabs example"
            >
                {categories.map(c =>
                    <Tab value={c.name} label={c.name} />
                )}
            </Tabs>
        </div>
    )
}

export default YogaAsanas;