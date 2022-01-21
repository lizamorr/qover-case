import { Model, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './cars.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly carsModel: Model<Car>) {}

  async findAll(): Promise<Car[]> {
    const cars = await this.carsModel.find().exec();
    console.log(cars);
    return cars;
  }

  async findOne(id: string): Promise<Car> {
    let car;
    try {
      car = await this.carsModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find car');
    }

    return car;
  }
}
