let rerenderEntireTree = () => {
    console.log('State is changed');
}
let state = {
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
}

// Functions for posts

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

// Functions for messages

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
        
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;