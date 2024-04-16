const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
    if (action.type === 'PLUS') {
        return {...state, count: state.count + 1}
    } else if (action.type === 'MINUS') {
        return {...state, count: state.count > 0 ? state.count - 1 : 0}
    } else if (action.type === 'ADD_TEN') {
        return {...state, count: state.count + 10}
    } else if (action.type === 'DELETE_ALL') {
        return {...state, count: 0}
    }
    return state
}