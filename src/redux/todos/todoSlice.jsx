import { createSlice } from "@reduxjs/toolkit";
export const todoSlice=createSlice({
    name:'todos',
    initialState:{
        items:[
            {
                id:'1',title:'go to school',completed:true
            },{
                id:'2',title:'read a book',completed:false
            }
        ],
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.items.push(action.payload)},
            toggle:(state,action)=>{
                const {id}=action.payload
                const item=state.items.find(item=>item.id===id);
                item.completed=!item.completed;
            
        },
    },

})
export const {AddTodo,toggle}=todoSlice.actions;
export default todoSlice.reducer;