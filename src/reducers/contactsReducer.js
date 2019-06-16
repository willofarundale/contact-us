const defaultState = {
    contacts: []
};

const contactsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts : action.payload
            }

        default:
            return state;
    }
}

export default contactsReducer;