import {ChangeThemeComponent} from "./ChangeThemeComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const UserComponent = () => {
    const {theme} = useContext(MyContext);
    const darkTheme = 'bg-black text-white ';
    const whiteTheme = 'bg-white ';
    const style = theme === 'dark' ? darkTheme : whiteTheme;
    return (
        <div className={style + " border-2 border-red-500 flex justify-between"}>
        <div>
            <p>username</p>
            <img className={'h-[5vh]'} src='https://cdn-icons-png.flaticon.com/512/9187/9187532.png' alt=""/>
        </div>
            <ChangeThemeComponent/>
        </div>

    );
};