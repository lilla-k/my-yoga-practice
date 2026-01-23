import './AsanaCard.css';
import type Asana from '../../types/yogaAsana.js';

function AsanaCard({asana}: {asana: Asana}){

    console.log(asana);
    return(
        <div className="AsanaCard">
            <img className="AsanaCard-image" src={`/asanas/${asana.image}`}></img>
            <div>{asana.name}</div>
        </div>
    )
}

export default AsanaCard;