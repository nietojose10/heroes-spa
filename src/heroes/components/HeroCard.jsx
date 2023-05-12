import { Link } from 'react-router-dom';

const CharactesByHero = ({ alter_ego, characters }) => {
    if ( alter_ego === characters ) return (<></>);
    return <p>{ characters }</p>;
}


export const HeroCard = ({ 
    id, 
    superhero,
    publiser,
    alter_ego,
    first_ego,
    first_appearance,
    characters
    }) => {
  
    
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  
    //const charactesByHero = (<p>{ characters }</p>);
    
    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4 animate__animated animate__fadeIn">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {/* {
                                ( alter_ego !== characters ) && (<p>{ characters }</p>)
                            } */}

                            <CharactesByHero characters={ characters } alter_ego={ alter_ego } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            
                            <Link to={`/hero/${ id }`}>
                                More...
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
