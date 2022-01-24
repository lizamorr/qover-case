import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsSchema } from './cars.schema';
import { CarsService } from './cars.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarsSchema }])],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
