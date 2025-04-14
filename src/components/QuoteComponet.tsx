import  {FC} from 'react';

import {IQuote} from "../models/IQuotes.ts";

interface CommentProp {
    quote: IQuote;
}

const QuoteComponet: FC<CommentProp> = ({quote}) => {
    console.log(quote);
    return (
        <div className="w-[97%] mx-auto border mb-2 p-2 flex justify-between items-center rounded-2xl gap-5">
            <p className={"inline-block"}>{quote.quote}</p>
            <p className={"inline-block bg-amber-300 rounded-2xl p-2"}>{quote.author}</p>
            </div>
    );
};

export default QuoteComponet;