import { types } from '../types/types';
//El reducer debe de ejecutarse bassado en el estado y la action que se tienen como variables
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    }

}