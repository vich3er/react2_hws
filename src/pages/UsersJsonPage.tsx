import {useEffect, useState} from "react";
import {IUsers} from "../models/JsonPlaceholder/IUser.ts";
import {getFromJsonPl} from "../services/api-service.ts";


const UsersJsonPage = () => {
    const [users, setUsers] = useState<IUsers>([]);
    useEffect(() => {
        const getUsers = async ()=>{
            setUsers(await getFromJsonPl.users());
        }
        getUsers();
    })
    return (
        <div>
            {users&& users.map(user=> <p key={user.id}>{user.email}</p>)}
        </div>
    );
};

export default UsersJsonPage;