import { ADD_NUMBER } from "../action/CounterAction"



const InitialState = {
    count: 0
}


export const CounterReducer= (state = InitialState, action)=>{
  switch (action.type) {
     case ADD_NUMBER: 
     return {
        ...state, count: state.count + 1
     }
     default:
     return state
  }
}