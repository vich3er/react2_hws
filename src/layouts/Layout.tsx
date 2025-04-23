
import {Outlet} from "react-router-dom";
import Menu from "../components/Menu.tsx";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            </div>
    );
};

export default Layout;