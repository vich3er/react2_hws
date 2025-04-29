import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul  className={'mb-2'}>
            <li className={'bg-blue-400 rounded-2xl hover:bg-blue-200 p-1  w-fit mb-2'}><Link to={'/users'}>users</Link></li>
        </ul>
    );
};