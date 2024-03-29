const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1 , name: 'Dmytro'},
        {id: 2 , name: 'Andriy'},
        {id: 3 , name: 'Svitlana'},
        {id: 4 , name: 'Sasha'},
        {id: 5 , name: 'Viktor'}
    ],
    messages: [
        {id: 1 , message: 'Hi'},
        {id: 2 , message: 'How is your day?'},
        {id: 3 , message: 'Nice!'},
        {id: 4 , message: 'Ok'},
        {id: 5 , message: 'At least I tried'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    };
};

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
};
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
};

export default dialogsReducer;