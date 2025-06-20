import {useForm} from "react-hook-form";
import {addCar} from "../services/api-service.ts";
import {ICar} from "../models/ICar.ts";

interface IFormProps {
    brand: string;
    year: number;
    price: number;
}

export const AddCar = ({ loadCars}:{ loadCars: ( )=>void}) => {
    const inputStyle = "focus:ring-2 p-2 border border-indigo-600  outline-none mb-2  focus:ring-indigo-600  rounded-md "

    const higlightAdded = ()=>
    {
        const carItem = document.getElementById("carItem");
       if(carItem){

           carItem.classList.add("bg-indigo-600/30");
           carItem.classList.add("animate-pulse");
           carItem.classList.add("shadow-md");
           carItem.classList.add("shadow-indigo-500/50");
          setTimeout(()=>{

              carItem.classList.remove("bg-indigo-600/30");
              carItem.classList.remove("animate-pulse");
              carItem.classList.remove("shadow-md");
              carItem.classList.remove("shadow-indigo-500/50");
          }, 5000)
       }
    }

    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<IFormProps>({mode: 'all'})

    const customHandler = (formDataProps: IFormProps) => {
      const car: ICar = {
          brand: formDataProps.brand,
          year: formDataProps.year,
          price: formDataProps.price,
      }
        console.log(formDataProps);
        addCar(car).then(() => {reset(); loadCars()}).then(res =>  higlightAdded() )
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div className='flex flex-col'>
                <input className={inputStyle} type="text"  {...register('brand')} placeholder={'brand'}/>
                <input  className={inputStyle} type="text"  {...register('year')} placeholder={'year'}/>
                <input  className={inputStyle} type="text" {...register('price')} placeholder={'price'}/>
            </div>
            <div className='flex justify-center'>
                <button disabled={!isValid} className={'bg-indigo-600  text-white p-2 rounded-3xl hover:scale-x-200 duration-700'} type='submit'>add</button>
            </div>
        </form>
    );
};