
export const productReducer = (state=[],action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
        case "ADD_PRODUCT":
            return [...state,action.payload];
        case "REMOVE_PRODUCT":
            return state.filter(p=>p.id !== action.id );
        case "EDIT_PRODUCT":
            return state.map(item=>{
                if (item.id == action.id) {
                    return {...item,...action.edit}
                } else {
                    return item;
                }
            })
        default:
            return state;
    }
}
