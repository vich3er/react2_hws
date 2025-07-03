import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {usersSliceActions} from "../redux/slices/usersSlice.ts";
import {UserComponent} from "../components/UserComponent.tsx";


export const UsersPage = () => {

    const {users} =  useAppSelector(({usersSlice}) => usersSlice);
    console.log('fgh');
    console.log(users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(usersSliceActions.loadUsers());
            console.log(usersSliceActions);
        }

    }, [])




    return (
        <div className={'grid grid-cols-3 gap-1'}>

            {
            users&&users.map((user) =>
                (
                    <UserComponent
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        address={user.address}
                        company={user.company}
                        phone={user.phone}
                        website={user.website}
                        key={user.id}

                    />
                )

            )
        }

        </div>
    );
};