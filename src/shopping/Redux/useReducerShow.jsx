
const initialState = {
    showGadget: Boolean,
    showFashion: Boolean,
    showFitness: Boolean
}

const useReducerShow = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {

        case "GADGET":
            state.showGadget = true
            state.showFashion = false
            state.showFitness = false
            return { ...state }

        case "FASHION":
            state.showFashion = true
            state.showGadget = false
            state.showFitness = false
            return { ...state }

        case "FITNESS":
            state.showFitness = true
            state.showFashion = false
            state.showGadget = false
            return { ...state }

        default: state.showGadget = true
            state.showFashion = false
            state.showFitness = false

            return { ...state }
    }
}


export default useReducerShow;
