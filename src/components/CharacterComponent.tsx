import   {FC, ReactNode} from 'react';
import {ISimpson} from "../ISimpson.ts";

interface CharacterCompPropType {
    simpson : ISimpson,
    children?: ReactNode

}
 export const CharacterComponent: FC<CharacterCompPropType> = ({simpson, children}) => {
    return (
        <div className={"cart shadow-xl p-5 "} >
         <div>
             <div>
                 <p className={'text-2xl  '}> {simpson.name} {simpson.surname}</p>
              <p>  Вік: {simpson.age}</p>

             </div>
             <img className={'h-[200px]  hover:border-amber-200 hover:border hover:rounded-md'} src={simpson.photo} alt={simpson.name} />
         </div>
            <p className={'pt-2'}>
                {children}
            </p>
        </div>
    );
};

