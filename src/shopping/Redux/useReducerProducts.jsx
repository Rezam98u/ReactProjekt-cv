
const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    checkout: false
}

const UseReducerProducts = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {

        case "ADD_ITEM":
            state.selectedItems.push({ ...action.payload, quantity: 1 })
            state.itemsCounter++
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                itemsCounter: state.itemsCounter
            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            state.itemsCounter--;
            console.log(newSelectedItems);
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }

        case "ADD":
            const add_index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[add_index].quantity++;
            return {
                ...state,
            }
        case "MIN":
            state.itemsCounter++;
            const min_index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[min_index].quantity--;
            return {
                ...state,
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }

        default: return state
    }
}


export default UseReducerProducts;
