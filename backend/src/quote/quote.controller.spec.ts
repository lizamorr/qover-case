import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { CarsService } from '../cars/cars.service';

describe('QuoteController', () => {
  let quoteController: QuoteController;
  let quoteService: QuoteService;

  function mockUserModel(dto: any) {
    this.data = dto;
    this.save = () => {
      return this.data;
    };
  }
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [
        QuoteService,
        CarsService,
        {
          provide: getModelToken('Car'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    quoteService = moduleRef.get<QuoteService>(QuoteService);
    quoteController = moduleRef.get<QuoteController>(QuoteController);
  });

  describe('getQuote', () => {
    it('should return an array of cars', async () => {
      const quoteRequest: any = {
        selectedCarId: '61ea6ed248d8f2138199d46b',
        age: '40',
        price: '6000',
      };
      const quote = { yearlyPrice: { universal: 2550, global: 150 } };
      jest
        .spyOn(quoteService, 'getQuote')
        .mockImplementation(async () => quote);

      expect(await quoteController.getQuote(quoteRequest)).toBe(quote);
    });
  });
});
