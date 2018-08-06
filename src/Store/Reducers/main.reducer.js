import AStool from './../../tools/AStool';
import * as at from './../Actions/main.at';
import ct from './../../components/contacts.json';


const initialState = { contacts: []}; 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case at.ADD_CONTACT:
            return {
                ...state,
                contacts: state.contacts.concat({name: action.name, surname: action.surname, tel: action.tel})
            } 
        case at.INITIAL_CONTACTS:
            return {
                ...state,
                contacts: action.data
            }
        default:
            return state;
    }
  }

export default reducer;