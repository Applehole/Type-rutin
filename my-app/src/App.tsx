import React, {useState, useEffect} from 'react';
import { AppContainer } from './Styled/appStyled';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Unsubscribe } from "@firebase/auth";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.
import AppRouter from './router'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<Unsubscribe | {} >({})
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObj(user)
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
        <div>
          {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "...initializing!"}
        </div>
  );
}

export default App;
