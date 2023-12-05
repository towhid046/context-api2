import { useReducer } from "react";
import ComponentA from "./Components/ComponentA";
import { MyContext } from "./Components/MyContext";
import { reducer } from './reducer';


export default function App() {

  const initialValue = {
    a: 5
  }
  const [state, dispatch] = useReducer(reducer, initialValue)
  
  return (
    <>
      <div>
        <MyContext.Provider value={{state, dispatch}}>
          <ComponentA/>
        </MyContext.Provider>
      </div>
    </>
  );
}
