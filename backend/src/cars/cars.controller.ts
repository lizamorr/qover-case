import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.schema';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return await this.carsService.findOne(id);
  }
}
