import React, { useContext, useState } from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function HBOProvider({children}){
const [user, setUser] = useState()
const defaultUserImg = 'https://images.generated.photos/0nDYZvW2PyRknrz8QtVclfVvXVllxOnNx1t-BGnNve0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI1Mzc0LmpwZw.jpg'
const CreateUserAction = (e) => {
  setUser(e.target.value)
  console.log(user)
}
  return(
    <StateContext.Provider
    value={{
      user,
      CreateUserAction,
      defaultUserImg
    }}>
      {children}
    </StateContext.Provider>
  )
}