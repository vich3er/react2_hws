import './App.css'
import {InformatopnComponent} from "./components/InformatopnComponent.tsx";
import {UserComponent} from "./components/UserComponent.tsx";
import {useState} from "react";
import {init, MyContext} from "./context/MyContext.tsx";

function App() {
const [currentTheme, setCurrentTheme] = useState<string>(init.theme);

    return (
        <div>
            <MyContext.Provider value={
                {
                    theme:  currentTheme,
                    changeTheme: () => {
                         if(currentTheme=='dark') {
                             setCurrentTheme('light');
                         }
                         else setCurrentTheme('dark');
                    }
                }
            }>

            <UserComponent/>
            <InformatopnComponent/>
        </MyContext.Provider>

        </div>
    )
}

export default App
