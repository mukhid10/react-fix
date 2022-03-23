import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { depositMoney, withdrawMoney } from "./redux/actions-creators/index";
import { useEffect, useState } from 'react';
import { apikucing } from './redux/actions-creators/index';

function App() {
  const [ang, setAng] = useState(100)
  const account = useSelector((state)=>state.account);
  const kucing = useSelector((state)=>state.kucing.kucing)
  console.log(kucing);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(apikucing())
  },[])

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>dispatch(depositMoney(ang))}>deposit</button>
      <button onClick={()=>dispatch(withdrawMoney(ang))}>withdraw</button>

      {kucing.map((item)=>(
        <p key={item.id}>{item.name}</p>
      ))}
      
    </div>
  );
}

export default App;
