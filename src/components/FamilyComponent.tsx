
import {CharacterComponent} from "./CharacterComponent.tsx";
import {simpsons} from "../data/simpsons.ts";


const FamilyComponent = () => {


    return (
        <div className={" grid grid-cols-3 gap-6"}>
            {simpsons.map((simpson, index) => (<CharacterComponent simpson={simpson} key={index}>{simpson.info}</CharacterComponent>))}
        </div>
    );
};

export default FamilyComponent;