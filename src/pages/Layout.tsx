import {Outlet} from "react-router-dom";
import {Menu} from "./Menu.tsx";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};