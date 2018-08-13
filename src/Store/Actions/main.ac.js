import * as at from './main.at';

const addContactAction = (name, surname, tel) => ({
	type: at.ADD_CONTACT,
	name,
	surname,
	tel,
});

export const addContact = (name, surname, tel) => dispatch => {
	dispatch(addContactAction(name, surname, tel));
};

const removeContactAction = id => ({
	type: at.REMOVE_CONTACT,
	id,
});

export const removeContact = id => dispatch => {
	dispatch(removeContactAction(id));
};

const editContactAction = (id, name, surname, tel) => ({
	type: at.EDIT_CONTACT,
	id,
	name,
	surname,
	tel,
});

export const editContact = (id, name, surname, tel) => dispatch => {
	dispatch(editContactAction(id, name, surname, tel));
};
