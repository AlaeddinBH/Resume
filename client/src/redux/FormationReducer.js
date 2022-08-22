import { ADDFORMATION, ADD_FORMATION_SUCCES, ADD_FORMATION_FAIL, GETFORMATION, FORMATION_DELETE, DELETE_FORMATION_SUCCES, DELETE_FORMATION_FAIL, EDIT_FORMATION, EDIT_FORMATION_SUCCES, EDIT_FORMATION_FAIL} from "./ActionTypes"

const init = {
    loading: false,
    errors: null,
    formation: [],  
};

const formationReducer = (state = init, {type,payload}) => {
    switch (type) {
        case ADDFORMATION:
        case EDIT_FORMATION:
            return {
                ...state, 
                loading: true,
            }
        case ADD_FORMATION_SUCCES:
           
            return {
                ...state, 
                loading: false, 
                formation: [...state.formation,payload], 
                errors: null,
            }

        case EDIT_FORMATION_SUCCES:   
        return {
            ...state, 
            loading: false, 
            formation: state.formation.map(el=>el._id === payload.id ? payload.formation : el),
            errors: null,
        }
        
        case ADD_FORMATION_FAIL:
        case EDIT_FORMATION_FAIL:      
            return {
                ...state, 
                loading: false, 
                errors: payload,
            }
        case GETFORMATION: 
            return {
                ...state,
                formation: payload,
            }
        case FORMATION_DELETE:
            return {
                ...state,
                loading: true, 
            }
        case DELETE_FORMATION_SUCCES:
            return {
                ...state,
                loading: false,
            }
        case DELETE_FORMATION_FAIL:
            return {
                ...state, 
                loading: false, 
                errors: payload,
            }
        default:
            return state;
    }
}

export default formationReducer;