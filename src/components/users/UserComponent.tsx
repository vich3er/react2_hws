
import {IUser} from "../../models/IUser.ts";
import {Link, Outlet} from "react-router-dom";

interface UserCompProps {
    user: IUser;
}

const UserComponent = ({user}:UserCompProps) => {

    return (
        <div className={'border border-blue-400 rounded-md mb-5'}>
            <div>
                <p>{user.id}</p>
                <p>email: {user.email}</p>
                <p>age: {user.age}</p>
                <p> username: {user.username}</p>
            </div>
             <li className={'bg-blue-400 rounded-2xl hover:bg-blue-200 p-1 w-fit'}>
                <Link state={user.id} to={'carts'}>carts</Link></li>
          <Outlet/>
            </div>

    );
};

export default UserComponent;