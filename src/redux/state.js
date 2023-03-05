let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1 , message: "Hi, how are you?", likesCount: 12},
                {id: 2 , message: "It's my first post", likesCount: 23}
            ],
            newPostText: 'text for new post'
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
            newMessageText: 'Text for new message'
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        // for messages
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText 
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;