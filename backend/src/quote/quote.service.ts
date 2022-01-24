import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QuoteRequest, QuoteResponse, InvalidQuote } from './quote.interface';
import { CarsService } from '../cars/cars.service';
import { MIN_AGE_ERROR, PRICE_ERROR, RISK_ERROR } from './constants';

@Injectable()
export class QuoteService {
  constructor(private carsService: CarsService) {}

  async getQuote(quoteRequest: QuoteRequest): Promise<QuoteResponse> {
    const { selectedCarId, age, price } = quoteRequest;
    const quoteErrors: InvalidQuote[] = [];

    const car = await this.carsService.getCar(selectedCarId);

    if (price < car.minPrice) {
      quoteErrors.push({
        key: 'price',
        message: PRICE_ERROR,
      });
    }

    if (age < car.minAge) {
      car.model === 'Porsche'
        ? quoteErrors.push({
            key: 'risk',
            message: RISK_ERROR,
          })
        : quoteErrors.push({
            key: 'minAge',
            message: MIN_AGE_ERROR,
          });
    }

    if (quoteErrors.length > 0) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: quoteErrors,
        },
        HttpStatus.FORBIDDEN,
      );
    } else {
      const universalYearlyPrice =
        car.insurancePrice + car.universalPercentageOfValue * price;

      return Promise.resolve({
        yearlyPrice: {
          universal: universalYearlyPrice,
          global: car.insurancePrice,
        },
      });
    }
  }
}
