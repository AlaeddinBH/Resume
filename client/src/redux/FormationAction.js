import { ADDFORMATION, ADD_FORMATION_SUCCES, ADD_FORMATION_FAIL, GETFORMATION, FORMATION_DELETE, DELETE_FORMATION_SUCCES, DELETE_FORMATION_FAIL, EDIT_FORMATION, EDIT_FORMATION_SUCCES, EDIT_FORMATION_FAIL} from "./ActionTypes"
import axios from 'axios';

export const addFormation = (newFormation) => async(dispatch) => {
    
    dispatch ({
        type: ADDFORMATION
    })
    try {
        const res = await axios.post('/formation/addFormation', newFormation);
        dispatch ({
            type: ADD_FORMATION_SUCCES,
            payload: res.data
        });
        
    } catch (error) {
        console.log(error.response.data.errors.map(el=>el.msg))
        dispatch({

            type: ADD_FORMATION_FAIL,
            payload: error.response.data
        });
        alert(error.response.data.errors.map(el=>el.msg));
    }
};

export const getFormation = () => async(dispatch) => {
    try {
        const res = await axios.get('/formation/formation');
        console.log(res.data)
        dispatch ({
            type: GETFORMATION,
            payload: res.data,
        });
    } catch (error) {
        alert(error.response.data)
    }
};

export const delFormation = (id) => async(dispatch) => {
    
    dispatch ({
        type: FORMATION_DELETE,
    })
    try {
        const res = await axios.delete(`/formation/delete/${id}`)
        dispatch({
            type: DELETE_FORMATION_SUCCES,
            payload: id
        })
        
    } catch (error) {
        dispatch({

            type: DELETE_FORMATION_FAIL,
            payload: error.response.data
        });
        alert(error.response.data);
    }
}

export const editFormation = (editedFormation) => async(dispatch) => {
    
    dispatch ({
        type: EDIT_FORMATION,
    })
    try {
        const res = await axios.put(`/product/update/${editedFormation.id}`, editedFormation)
        console.log(res)
        dispatch({
            type: EDIT_FORMATION_SUCCES,
            payload: {
                id: editedFormation.id,
                product : res.data,
            }
        })
        
    } catch (error) {
        dispatch({

            type: EDIT_FORMATION_FAIL,
            payload: error.response.data
        });
        alert(error.response.data);
    }
}