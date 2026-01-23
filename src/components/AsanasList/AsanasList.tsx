import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import yogaAsanaServices from '../../services/yogaAsanaService.ts';
import Loading from '../Loading/Loading.tsx';
import AsanaCard from '../AsanaCard/AsanaCard.tsx'


function AsanasList(){

    const [loading, setLoading] = useState(false);
    const [asanasList, setAsanasList] = useState([]);
    const { selectedCategory } = useParams();

    useEffect(() => {
        fetchAsanasList();
    }, [selectedCategory]);

    async function fetchAsanasList(){
        setLoading(true);
        const data = await yogaAsanaServices.getYogaAsana(selectedCategory); 
        console.log(data);
        setAsanasList(data);
        setLoading(false);
    }

    return(<div>
        <div>{asanasList.map(asana => <AsanaCard asana={asana}/>)}</div>
        {loading && <Loading/>}
    </div>)

}

export default AsanasList;