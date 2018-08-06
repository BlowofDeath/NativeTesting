import * as at from './main.at';

const addContact_middle = (name, surname, tel) => {
    return {
        type: at.ADD_CONTACT,
        name: name,
        surname: surname,
        tel: tel
    }
};

export const addContact = (name, surname, tel) => {
    return dispatch => {
        dispatch(addContact_middle(name, surname, tel));
    }
}

export const initialContacts = (data) => {
    return dispatch => {
        dispatch({   
            type: at.INITIAL_CONTACTS,
            data: data
        });
    }
}