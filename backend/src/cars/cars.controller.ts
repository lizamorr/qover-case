import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Car } from './cars.interface';
import { CarsService } from './cars.service';
import { ValidateObjectId } from '../shared/validate-object-id.pipes';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCars(@Res() res): Promise<Car[]> {
    const cars = await this.carsService.getCars();
    if (!cars || cars.length === 0) {
      throw new NotFoundException('Cars do not exist');
    }
    return res.status(HttpStatus.OK).json(cars);
  }

  @UseGuards(JwtAuthGuard)
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
