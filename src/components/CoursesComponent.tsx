import {coursesArray} from "../data/courses.ts";
import CourseComponent from "./CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div className={'grid grid-cols-4  gap-4'}>
            {
                coursesArray.map((course, i) => (<CourseComponent course={course} key={i} />))
            }
        </div>
    );
};

export default CoursesComponent;