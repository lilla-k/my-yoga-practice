import './AsanaCard.css';
import type Asana from '../../types/yogaAsana.js';

function AsanaCard({asana}: {asana: Asana}){

    console.log(asana);
    return(
        <div className="AsanaCard">
            <img className="AsanaCard-image" src={`/asanas/${asana.image}`}></img>
               <div className="AsanaCard-details"> 
                <div className="AsanaCard-name">{asana.name}</div>
                <div className="AsanaCard-sanskrit">{asana.sanskrit}</div>
            </div>
            
        </div>
    )
}

export default AsanaCard;