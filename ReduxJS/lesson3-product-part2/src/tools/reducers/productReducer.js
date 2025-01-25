
export const productReducer = (state=[],action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
        case "ADD_PRODUCT":
            return [...state,action.payload];
            
        default:
            return state;
    }
}
