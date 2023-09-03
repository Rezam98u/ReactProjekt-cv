
const initialState = {
    massage: String,
    emailFind: Boolean
}

const useReducerCheckEmail = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {

        case "USER_NOT_FOUND":
            state.massage = "USER NOT FOUND"
            state.emailFind = false
            return { ...state }

        case "USER_HAS_ALREADY_SINGED_UP":
            state.massage = "user has already signed up"
            state.emailFind = true
            return { ...state }

        default:
            return { ...state }
    }
}


export default useReducerCheckEmail;
