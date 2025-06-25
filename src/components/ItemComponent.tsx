import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const SomeComponent = () => {
    const arr = [1, 2, 3, 4]
    const {theme} = useContext(MyContext);
    const color= theme=='dark'? 'bg-white': 'bg-black';
    return (
        <div className={'flex justify-between my-10'}>
            {
                arr.map((item, i) => <div className={`${color} h-[200px] w-[200px]`} key={i}>

                </div>)
            }
        </div>
    );
};