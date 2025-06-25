import { useParams } from 'react-router';

function YogaPoses(){

    const {category} = useParams();


    return(
        <div>
            <div>Poses</div>
            <div>{category}</div>
        </div>
    )
}

export default YogaPoses;