import {
  Post,
  Controller,
  Res,
  Param,
  HttpStatus,
  NotFoundException,
  Body,
} from '@nestjs/common';
import { QuoteRequest, QuoteResponse } from './quote.interface';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post('/getQuote')
  async getQuote(
    @Res() res,
    @Body() quoteRequest: QuoteRequest,
  ): Promise<QuoteResponse> {
    const quote = await this.quoteService.getQuote(quoteRequest);
    if (!quote) {
      throw new NotFoundException('Cannot calculate a quote');
    }
    return res.status(HttpStatus.OK).json(quote);
  }
}
