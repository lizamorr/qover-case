import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@qover.drzzd.mongodb.net/nestjs?retryWrites=true&w=majority`,
    ),
    CarsModule,
    QuoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
