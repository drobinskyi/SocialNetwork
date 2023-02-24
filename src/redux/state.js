let state = {
    profilePage: {
        posts: [
            {id: 1 , message: "Hi, how are you?", likesCount: 12},
            {id: 2 , message: "It's my first post", likesCount: 23}
        ]
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
            {id: 1 , message: 'Hi', key: 11},
            {id: 2 , message: 'How is your day?', key: 12},
            {id: 3 , message: 'Nice!', key: 13},
            {id: 4 , message: 'Ok', key: 14},
            {id: 5 , message: 'At least I tried', key: 15}
        ]
    }   
}

export default state;