import {PaginationComponent} from "./PaginationComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPaginatedUsers} from "../services/api-service.ts";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {IUsersResponse} from "../models/IUsersResponse.ts";



export const UsersComponent = () => {
    const [query, setQuery] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
 const [total, setTotal] = useState(0);
 const limit = 30;
    useEffect(() => {
     getPaginatedUsers(query.get('page')|| '1').then((res: IUsersResponse)=>{
        // тут не працюють підсказки після крапки, чому?
         setTotal(res.total);
         setUsers(res.users)
     })
    }, [query]);
    return (
        <div>
            <div className='grid grid-cols-3 mb-6'>
                {users&& users.map(user => (<UserComponent key={user.id}
                                                           firstName={user.firstName}
                                                           lastName={user.lastName}
                                                           email={user.email}
                                                           phone={user.phone}
                                                           username={user.username} />))}
            </div>
            <PaginationComponent  total={total} limit={limit}/>

        </div>
    );
};