import { useContext } from "react";
import { CreateContext } from "./../App";

export default function ComponentB1() {
  const { count, setCount } = useContext(CreateContext);
  return (
    <>
      <button onClick={()=>setCount(count + 1)}>Add to cart</button> <br />
      <button onClick={()=>setCount(count > 0 ? count - 1 : count )} >Remove from cart</button> <br />

    </>
  );
}
