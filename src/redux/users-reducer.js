const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, followed: false, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Dmytro', status: 'I am a boss', location: { city: 'Kyiv', country: 'Ukraine' } },
        // { id: 2, followed: true, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Ann', status: 'Hello', location: { city: 'VInnytsia', country: 'Ukraine' } },
        // { id: 3, followed: false, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Vitalii', status: 'I am a boss too', location: { city: 'Lviv', country: 'Ukraine' } } 
    ]  
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
          
        default:
            return state;
    };
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;

