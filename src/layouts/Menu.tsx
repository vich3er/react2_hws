import {NavLink, Outlet} from "react-router-dom";

const Menu = () => {
    const active = 'text-indigo-600';
    return (
        <div>

            <div>
                <NavLink to="/users" className={({ isActive }) => (isActive ? active : '')}>
                    users
                </NavLink>
            </div>
<div>
    <NavLink to={'/posts'} className={ ({isActive}) =>(isActive?active: '') }  >posts</NavLink>

</div>
<div>
    <NavLink to={'/comments'}  className={({isActive})=>(isActive? active: '')} >comments</NavLink>

</div>
<div>
    <NavLink to={'/complex'} className={({isActive})=>(isActive? active: '')} >complex</NavLink>

</div>
            <Outlet/>
        </div>
    );
};

export default Menu;