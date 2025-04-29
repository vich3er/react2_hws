import {useEffect, useState} from "react";
import {getFromDummy} from "../services/api-service.ts";
import {IUserDummy} from "../models/DummyJson/IUser.ts";


const UsersDummyPage = () => {
    const [users, setUsers] = useState<IUserDummy[] | null>(null);
    useEffect(() => {
        const getUsers = async ()=>{
            setUsers(await getFromDummy.users());
        }
        getUsers();
    })
    return (
        <div>
            {users&& users.map(user=> <p key={user.id}>{user.email}</p>)}
        </div>
    );
};

export default UsersDummyPage;