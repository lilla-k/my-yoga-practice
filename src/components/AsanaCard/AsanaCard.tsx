import './AsanaCard.css';

function AsanaCard({asana}){

    console.log(asana);
    return(
        <div className="AsanaCard">
            <div>{asana.name}</div>
            <div>{asana.image}</div>
        </div>
    )
}

export default AsanaCard;