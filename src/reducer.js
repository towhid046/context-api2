export const reducer = (state, action) => {
    const {type, payload} = action
        if(type === 'ADD_NUMBER'){
          return {
            ...state,
            a: state.a + payload
          }
        }
        if(type === 'DECREMENT_NUMBER'){
          return {
            ...state,
            a: state.a - payload
          }
        }
  }
