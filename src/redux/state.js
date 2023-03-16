import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
};

export default store;
window.store = store;