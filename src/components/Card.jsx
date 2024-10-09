import './card.css'

const Card = ({person}) => {
    return (
        /* From Uiverse.io by Smit-Prajapati */
        <div className="card">
            <div className="profile-pic">
            <img src={person?.image} alt="" />

            </div>
            <div className="bottom">
                <div className="content">
                    <span className="about-me">Genero: {person.gender}</span>
                    <span className="about-me">Status: {person.status}</span>
                    <span className="about-me">Especie: {person.species}</span>
                </div>
                <div className="bottom-bottom">
                    <p className='name'>{person.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
