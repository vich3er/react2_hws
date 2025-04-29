
import {IUser} from "../../models/IUser.ts";

interface UserCompProps {
    user: IUser;
}

const UserComponent = ({user}:UserCompProps) => {
    return (
        <div className={'border border-blue-400 rounded-md mb-5'}>
           <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <p> username: {user.username}</p>
            </div>
    );
};

export default UserComponent;