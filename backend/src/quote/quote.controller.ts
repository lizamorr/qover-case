import { Post, Body, Controller } from '@nestjs/common';
import { GetQuote, IQuoteResponse } from './quote.types';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}
  // @Post('/getQuote')
  // getQuote(@Body() getQuote: GetQuote): Promise<IQuoteResponse> {
  //   // return this.quoteService.getQuote(getQuote);
  // }
}
