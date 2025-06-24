import {useEffect, useState} from "react";

export const useFetch = <T>(url: string) => {


    const [result, setResult] = useState<T>();
    useEffect(() => {
        fetch(url).then((res) =>
            res.json()).then((data) =>
            setResult(data));
    }, [])
    console.log(result);
    console.log(111);
    return result as T;
}
