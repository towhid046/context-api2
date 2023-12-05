import { useContext } from 'react';
import ComponentB1 from './ComponentB1';
import { CreateContext } from '../App';

export default function ComponentB() {
    const {count,setCount} = useContext(CreateContext)
  return (
    <div>
        <ComponentB1/>
        <button onClick={()=>setCount(count + 1)} >Add to cart</button> <br />
        <button onClick={()=>setCount(count > 0 ? count - 1 : count )} >Remove from cart</button>
    </div>
  )
}
