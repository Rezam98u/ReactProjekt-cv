const addItem = product => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

const removeItem = product => {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}

const increase = product => {
    return {
        type: "ADD",
        payload: product
    }
}

const decrease = product => {
    return {
        type: "MIN",
        payload: product
    }
}

const checkout = () => {
    return {
        type: "CHECKOUT"
    }
}

const clear = () => {
    return {
        type: "CLEAR"
    }
}

export { addItem, removeItem, increase, decrease, checkout, clear };