import { createContext, useState } from "react";

export const AppContext=createContext();

function AppContextProvider({children}){
    const[theme,setTheme]=useState("dark");//dark light
    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    }
    return(
        //data is provide here
        <AppContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider