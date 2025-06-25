import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const ChangeThemeComponent = () => {
const {theme, changeTheme} = useContext(MyContext);
const nextTheme = theme=='dark'? 'light' : 'dark';
    return (
        <button className={'bg-red-600'} onClick={()=>{
            changeTheme(nextTheme);
        }}>Change theme on {nextTheme}</button>

    );
};