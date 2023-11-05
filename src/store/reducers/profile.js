const initialState = {
    user: {
        userId: "",
        email: "",
        // nickName: "",
        // blogName: "",
        // info: ""
    }
}

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PROFILE' : {
            return {
                ...state,
                user: {
                    ...state.user,
                    userId: action.data.userId,
                    email: action.data.email,
                    // nickName: action.data.nickName,
                    // blogName: action.data.blogName,
                    // info: action.data.info
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default ProfileReducer