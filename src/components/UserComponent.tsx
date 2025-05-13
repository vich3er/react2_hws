import {FC} from "react";

interface UserCompProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
}

export const UserComponent: FC<UserCompProps> = ({ firstName, lastName, username, phone, email }) => {
    const addBorderHover  = "group-hover:border group-hover:border-amber-400 group-hover:shadow-2xl "
    return (
        <div className={"relative  h-20  m-1 border border-amber-400  group overflow-visible hover:border-0 "}>

           <div className={' p-3 group-hover:hidden   ' + addBorderHover}>
               <p>{firstName} {lastName}</p>
               <p>{username}</p>

           </div>
            <div className={"relative z-20  p-3 bg-white h-fit  hidden group-hover:block    " + addBorderHover}>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{username}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>


    );
};
