export interface QuoteResponse {
  yearlyPrice: {
    universal: number;
    global: number;
  };
}

export interface QuoteRequest {
  params: {
    selectedCarId: string;
    age: number;
    price: number;
  };
}

export interface InvalidQuote {
  key: string;
  message: string;
}
