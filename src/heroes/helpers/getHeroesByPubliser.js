import { heroes } from '../data/heroes';

export const getHeroesByPubliser = ( publiser ) => {

    const validPublisers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublisers.includes( publiser ) ){

        throw new Error(`${ publiser } is not a valid publiser ` );
        
    }
    
    return heroes.filter( heroe => heroe.publisher === publiser );

}