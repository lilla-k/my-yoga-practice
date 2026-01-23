import './AsanaCard.css';

function AsanaCard({asana}){

    console.log(asana);
    return(
        <div className="AsanaCard">
            <div>{asana.asanaName}</div>
            {asana.description}
        </div>
    )
}

export default AsanaCard;