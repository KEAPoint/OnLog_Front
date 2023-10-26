const initialState = {
    user: {
        // jwt: null,
        userId: "",
        email: "",
    }
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN' : {
            return {
                ...state,
                user: {
                    ...state.user,
                    // jwt: action.data.jwt,
                    userId: action.data.userId,
                    email: action.data.email
                }
            }
        }
        default: {
            return state;
        }
    }

}

export default LoginReducer