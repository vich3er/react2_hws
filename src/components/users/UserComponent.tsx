import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

interface UserCompProps {
    user: IUser;
}

const UserComponent = ({user}:UserCompProps) => {
const navigate = useNavigate();
    const handleOnClick = () => {
         navigate(user.id + '/carts');
         scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={'border border-blue-400 rounded-md mb-5 w-200 p-3 '}>
            <div>
                <p>{user.id}</p>
                <p>email: {user.email}</p>
                <p>age: {user.age}</p>
                <p> username: {user.username}</p>
            </div>
             <button onClick={handleOnClick} className={'bg-blue-400 rounded-2xl hover:bg-blue-200 p-1 w-fit'}>
               cart
             </button>

            </div>

    );
};

export default UserComponent;