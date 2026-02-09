import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import yogaAsanaServices from '../../services/yogaAsanaService.ts';
import Loading from '../Loading/Loading.tsx';
import AsanaCard from '../AsanaCard/AsanaCard.tsx';
import './AsanasList.css';


function AsanasList(){

    const [loading, setLoading] = useState(false);
    const [asanasList, setAsanasList] = useState([]);
    const { selectedCategory } = useParams();

    useEffect(() => {
        fetchAsanasList();
    }, [selectedCategory]);

    async function fetchAsanasList(){
        setAsanasList([]);
        setLoading(true);
        const data = await yogaAsanaServices.getYogaAsana(selectedCategory); 
        console.log("asanas", data);
        setAsanasList(data);
        setLoading(false);
    }

    return(<div>
        <div className="AsanasList-flexContainer">{asanasList.map(asana => <AsanaCard asana={asana}/>)}</div>
        {loading && <Loading/>}
    </div>)

}

export default AsanasList;