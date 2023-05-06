import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {

    //Si existe devuelve un arreglo de heroes sino regresa undefined.
    return heroes.find( hero => hero.id === id );

}