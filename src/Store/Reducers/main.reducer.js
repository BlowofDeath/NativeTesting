import * as at from '../Actions/main.at';
import ct from '../../components/contacts.json';

const initialState = { contacts: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case at.ADD_CONTACT:
			return {
				...state,
				contacts: state.contacts.concat({ name: action.name, surname: action.surname, tel: action.tel }),
			};
		case at.REMOVE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter((_, index) => index !== action.id),
			};
		case at.EDIT_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(
					(item, index) => (index === action.id ? { name: action.name, surname: action.surname, tel: action.tel } : item)
				),
			};
		default:
			return state;
	}
};

export default reducer;
