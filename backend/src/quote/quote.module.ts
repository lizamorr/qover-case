import { Module } from '@nestjs/common';
import { CarsModule } from '../cars/cars.module';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';

@Module({
  imports: [CarsModule],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
