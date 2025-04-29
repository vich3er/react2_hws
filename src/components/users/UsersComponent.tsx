import {IResponse} from "../../models/IResponse.ts";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getData} from "../../services/api-service.ts";
import UserComponent from "./UserComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getData<IResponse & {users: IUser[]}>('users').then(({users})=>setUsers(users))
    },[])
    return (
        <div className={'flex gap-5'}>
            {users&& <div className={'p-3'}>{users.map((user) => (<UserComponent user={user} key={user.id} />))}</div>}
             <div><Outlet/></div>
        </div>
    );
};