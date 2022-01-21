export interface IQuoteResponse {
  yearlyPrice: {
    universal: number;
    global: number;
  };
}

export interface GetQuote {
  params: {
    carId: string;
    age: number;
    purchasePrice: number;
  };
}

export interface InvalidQuote {
  key: string;
  message: string;
}
