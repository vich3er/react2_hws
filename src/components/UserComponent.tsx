import {FC} from "react";
import {Address, Company} from "../models/IUser.ts";

interface UserComponentProps {
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export const UserComponent:FC<UserComponentProps> = ({name, username, email, address, company, website, phone}) => {
    return (
        <div className={'border-2 border-indigo-600 rounded-md p-5'}>
            <div>{name} {username}</div>
            <div>{email}</div>
            <div>city: {address.city}</div>
            <div>phone: {phone}</div>
            <div>{website}</div>
            <div>company: {company.name}</div>
        </div>
    );
};