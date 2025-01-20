const initialState = [
    {
        id:1,
        title:"Samsung",
        price:"3000"
    },
    {
        id:2,
        title:"Mi",
        price:"2000"
    }
];



export const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
            
        default:
            return state;
    }
}