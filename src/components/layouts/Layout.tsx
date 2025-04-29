import {Outlet} from "react-router-dom";
import {Menu} from "../menu/Menu.tsx";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};