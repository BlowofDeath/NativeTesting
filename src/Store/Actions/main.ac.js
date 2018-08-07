import * as at from './main.at';

const addContact_middle = (name, surname, tel) => {
    return {
        type: at.ADD_CONTACT,
        name,
        surname,
        tel
    }
};

export const addContact = (name, surname, tel) => {
    return dispatch => {
        dispatch(addContact_middle(name, surname, tel));
    }
}

const removeContact_middle = (id) => {
    return {
        type: at.REMOVE_CONTACT,
        id
    }
};

export const removeContact = (id) => {
    return dispatch => {
        dispatch(removeContact_middle(id));
    }
}

const editContact_middle = (id, name, surname, tel) => {
    return {
        type: at.EDIT_CONTACT,
        id,
        name,
        surname,
        tel
    }
};

export const editContact = (id, name, surname, tel) => {
    return dispatch => {
        dispatch(editContact_middle(id, name, surname, tel));
    }
}

