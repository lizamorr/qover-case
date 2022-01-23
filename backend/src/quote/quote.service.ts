import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QuoteRequest, QuoteResponse, InvalidQuote } from './quote.interface';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class QuoteService {
  constructor(private carsService: CarsService) {}

  async getQuote(quoteRequest: QuoteRequest): Promise<QuoteResponse> {
    const { selectedCarId, age, price } = quoteRequest;
    const quoteErrors: InvalidQuote[] = [];
    const priceError: string = 'Sorry! The price of the car is too low';
    const riskError: string = 'Sorry! We can not accept this particular risk';
    const minAgeError: string = 'Sorry! The driver is too young';

    if (price < 5000) {
      quoteErrors.push({
        key: 'price',
        message: priceError,
      });
    }

    if (age < 18) {
      quoteErrors.push({
        key: 'minAge',
        message: minAgeError,
      });
    }

    const car = await this.carsService.getCar(selectedCarId);
    if (car && car.minAge > age) {
      quoteErrors.push({
        key: 'risk',
        message: riskError,
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
