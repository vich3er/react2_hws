import {useSearchParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";


interface PaginationComponentProps {
    total: number;
    limit: number;
}

export const PaginationComponent: FC<PaginationComponentProps> = ({total, limit}) => {

    const btnStyle = 'bg-amber-400 rounded-lg p-1 disabled:bg-slate-50'
    const [query, setQuery] = useSearchParams({page: "1"});
    const pageNumber = query.get('page');
    console.log("pageNumber " + pageNumber);
    let currentPage =  pageNumber? +pageNumber : 1;
    console.log(total);
    console.log(limit);
    const numberOfPages = Math.round(total / limit);

    const [disabledPrev, setdisabledPrev] = useState(true)
    const [disabledNext, setdisabledNext] = useState(false)

    useEffect(() => {
        if (pageNumber) {
            console.log(currentPage == 1);
            if (currentPage==1) {
                setdisabledPrev(true)
            } else {
                setdisabledPrev(false)
            }
            if (currentPage !== numberOfPages)
                (setdisabledNext(false))
            else {
                setdisabledNext(true)
            }

            console.log(currentPage == numberOfPages);
            console.log("currentPage " + currentPage);
            console.log("numberOfPages " + numberOfPages);
        }
    }, [pageNumber]);


    const handleClick = (s: "-" | "+") => {

        if (pageNumber) {


            {
                if (s == '-') {

                    if (currentPage > 1) {
                        --currentPage;
                        setQuery({page: currentPage.toString()})
                    }
                } else if (s == '+') {

                    if (currentPage < numberOfPages) {
                        ++currentPage;
                        setQuery({page: currentPage.toString()})

                    }
                }
            }

        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})


    }

    return (
        <div className={'flex justify-between '}>
            <button className={btnStyle} onClick={() => handleClick("-")} disabled={disabledPrev}>prev</button>
            <button className={btnStyle} onClick={() => handleClick("+")} disabled={disabledNext}>next</button>
        </div>
    );

};