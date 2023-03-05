const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1 , message: "Hi, how are you?", likesCount: 12},
                {id: 2 , message: "It's my first post", likesCount: 23}
            ],
            newPostText: 'Text for new post'
        },
        dialogsPage: {
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
            newMessageBody: ''
        }   
    },

    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // { type: 'ADD-POST' }
        // for posts
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        // for messages
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody 
            };
            this._state.dialogsPage.messages.push(body);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

//for posts

export const addPostActionCreator = () => {
    return { type: ADD_POST }
};

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

//for messages

export const addMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
};

export const updateNewMessageBodyActionCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
};

export default store;
window.store = store;