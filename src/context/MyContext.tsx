import {createContext} from "react";

interface MyContextType {
    theme:   string;
    changeTheme: (theme: string) => void;

}

export const init = {
    theme: 'light',changeTheme: (theme: string) => {} }

export const MyContext
    = createContext<MyContextType>(init)