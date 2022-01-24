export interface QuoteResponse {
  yearlyPrice: {
    universal: number;
    global: number;
  };
}

export interface QuoteRequest {
  selectedCarId: string;
  age: number;
  price: number;
}

export interface InvalidQuote {
  key: string;
  message: string;
}
