import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './cars.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private readonly carsModel: Model<Car>) {}

  async getCars(): Promise<Car[]> {
    const cars = await this.carsModel.find().exec();
    return cars;
  }

  async getCar(id: string): Promise<Car> {
    let car;
    try {
      car = await this.carsModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find car');
    }

    return car;
  }
}
