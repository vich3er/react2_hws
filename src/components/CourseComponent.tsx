import  {FC} from 'react';
import {ICourse} from "../models/ICourse.ts";

interface CourseProps {
    course: ICourse;
}

const CourseComponent:FC<CourseProps>  = ({course} ) => {
    return (
        <div className={' p-10 rounded-md flex flex-col  justify-center     border-2 border-blue-500 group  hover:bg-blue-500 h-[150px] hover:h-max  '}>
<p className={'text-center text-blue-500 text-2xl pb-5 group-hover:text-white'}>{course.title}</p>
            <div>

                <p >{course.monthDuration} місяців</p>
                <p>{course.hourDuration} годин</p>

                <div className={"hidden group-hover:block  transition-[3s] "}>
                    <p className={'text-white'}>Модулі:</p>
                    <ul className={'pl-5'} >
                        {course.modules.map((module, i) =><li key={i}>{module}</li>)}
                    </ul>
                  <div className={'flex justify-center'}>  <button className={' mt-10 text-white border-1 rounded-md p-1'} >Купити</button></div>
                </div>

            </div>
        </div>
    );
};

export default CourseComponent;