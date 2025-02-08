import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    id:1,
    row:2,
    title:"read book"
  },
  {
    id:2,
    row:1,
    title:"learn lesson"
  },
  {
    id:3,
    row:3,
    title:"new item"
  }
]

const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    add:(state,action)=>{
      const newTodo = {id:crypto.randomUUID(),title:action.payload};
      state.push(newTodo);
    }
  }
})

export default todoSlice.reducer;
export const {add} = todoSlice.actions;
