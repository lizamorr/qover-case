import {
  Post,
  Controller,
  NotFoundException,
  Body,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QuoteRequest, QuoteResponse } from './quote.interface';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/getQuote')
  async getQuote(@Body() quoteRequest: QuoteRequest): Promise<QuoteResponse> {
    const quote = await this.quoteService.getQuote(quoteRequest);
    if (!quote) {
      throw new NotFoundException('Cannot calculate a quote');
    }
    return quote;
  }
}
