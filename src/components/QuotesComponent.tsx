import   {useEffect, useState} from 'react';
import {getQuotes} from "../services/api-service.ts";
import QuoteComponet from "./QuoteComponet.tsx";


const QuotesComponent = () => {

    const [quotes, setQuotes] = useState<IQuotes | null>(null);

    console.log(quotes);
    useEffect(() => {
      const getData = async ()=>{
            setQuotes(await getQuotes());
      }
         getData();

    }, [])

    return (
        <div>
            {
                quotes?.quotes.map((quote, i) =>  <QuoteComponet quote={quote} key={i} />)
            }
        </div>
    );
};

export default QuotesComponent;