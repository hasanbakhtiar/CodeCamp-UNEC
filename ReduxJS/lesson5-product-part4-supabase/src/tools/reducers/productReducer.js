
export const productReducer = (state=null,action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return action.products;
    
        default:
            return state;
    }
}
