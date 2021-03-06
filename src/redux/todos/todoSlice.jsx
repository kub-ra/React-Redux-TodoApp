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
        activeFilter:'all',
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.items.push(action.payload)},
            toggle:(state,action)=>{
                const {id}=action.payload
                const item=state.items.find(item=>item.id===id);
                item.completed=!item.completed;
            
        },
        destroy:(state,action)=>{
            const id=action.payload;
            const filtered=state.items.filter((item)=>item.id!==id);
            state.items=filtered;
        },
        changeActiveFilter:(state,action)=>{
            state.activeFilter=action.payload;

        },
        clearFiltered:(state)=>{
            const filtered=state.items.filter(item=>item.completed===false);
            state.items=filtered;
        }

        
    
}

})
export const selectTodos=(state)=>state.todos.items;
export const {AddTodo,toggle,destroy,changeActiveFilter,clearFiltered}=todoSlice.actions;
export default todoSlice.reducer;