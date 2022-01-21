import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { Car } from './cars.interface';
import { CarsService } from './cars.service';
import { ValidateObjectId } from './validate-object-id.pipes';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async getCars(@Res() res): Promise<Car[]> {
    const cars = await this.carsService.getCars();
    return res.status(HttpStatus.OK).json(cars);
  }

  @Get(':id')
  async getCar(
    @Res() res,
    @Param('id', new ValidateObjectId()) id,
  ): Promise<Car> {
    const car = await this.carsService.getCar(id);
    if (!car) {
      throw new NotFoundException('Car does not exist');
    }
    return res.status(HttpStatus.OK).json(car);
  }
}
