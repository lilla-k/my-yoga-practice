import { useEffect, useState } from 'react';
import yogaAsanaServices from '../../services/yogaAsanaService.ts';
import Loading from '../Loading/Loading.tsx';
import AsanaCard from '../AsanaCard/AsanaCard.tsx';
import './AsanasList.css';


function AsanasList({filters}){

    const [loading, setLoading] = useState(false);
    const [asanasList, setAsanasList] = useState([]);

    useEffect(() => {
        fetchAsanasList();
    }, [filters]);

    async function fetchAsanasList(){
        setAsanasList([]);
        setLoading(true);
        const data = await yogaAsanaServices.getYogaAsana(filters.selectedCategory); 
        console.log("asanas from server", data);
        setAsanasList(data);
        setLoading(false);
    }

    return(<div>
        <div className="AsanasList-flexContainer">{asanasList.map(asana => <AsanaCard asana={asana}/>)}</div>
        {loading && <Loading/>}
    </div>)

}

export default AsanasList;