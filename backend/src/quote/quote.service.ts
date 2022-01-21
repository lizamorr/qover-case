import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetQuote, IQuoteResponse, InvalidQuote } from './quote.types';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class QuoteService {
  constructor(private carsService: CarsService) {}
  async getQuote(quote: GetQuote) {
    //   const { carId, purchasePrice, age } = quoteDTO.params;
    //   const errors: InvalidQuote[] = [];
    //   if (purchasePrice < 5000)
    //     errors.push({
    //       key: 'purchasePrice',
    //       message: 'Sorry! The price of the car is too low',
    //     });
    //   if (age < 18)
    //     errors.push({ key: 'age', message: 'Sorry! The driver is too young' });
    //   const car = await this.carsService.getCarById(carId);
    //   if (car && car.minAge > age)
    //     errors.push({
    //       key: 'general',
    //       message: 'Sorry! We can not accept this particular risk',
    //     });
    //   if (errors.length > 0) {
    //     throw new HttpException(
    //       {
    //         status: HttpStatus.FORBIDDEN,
    //         error: errors,
    //       },
    //       HttpStatus.FORBIDDEN,
    //     );
    //   }
    //   const calculateUniversalYearlyPrice = (): number => {
    //     return car.insuranceCost + car.universalPercentageCost * purchasePrice;
    //   };
    //   return Promise.resolve({
    //     yearlyPrice: {
    //       universal: calculateUniversalYearlyPrice(),
    //       global: car.insuranceCost,
    //     },
    //   });
  }
}
