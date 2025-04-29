import {IResponse} from "../../models/IResponse.ts";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getData} from "../../services/api-service.ts";
import UserComponent from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getData<IResponse & {users: IUser[]}>('users').then(({users})=>setUsers(users))
    },[])
    return (
        <>
            {users&& users.map((user) => (<UserComponent user={user} key={user.id} />))}
        </>
    );
};