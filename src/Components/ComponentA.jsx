import { useContext } from "react"
import { MyContext } from './MyContext';


export default function ComponentA() {

      const {state, dispatch} = useContext(MyContext)
  
  return (
    <div>
        <h1>{state.a}</h1>
        <button onClick={()=>dispatch({type: 'ADD_NUMBER', payload: 5})}>Increment</button>
        <button onClick={()=>dispatch({type: 'DECREMENT_NUMBER', payload: 5})}>Decrement</button>

    </div>
  )
}
