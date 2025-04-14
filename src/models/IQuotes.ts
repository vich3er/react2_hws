export interface Quotes {
  id: number;
  quote: string;
  author: string;
}

export interface IQuotes {
  quotes: Quotes[];
  total: number;
  skip: number;
  limit: number;
}