import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let carsController: CarsController;
  let carsService: CarsService;

  function mockUserModel(dto: any) {
    this.data = dto;
    this.save = () => {
      return this.data;
    };
  }
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        CarsService,
        {
          provide: getModelToken('Car'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    carsService = moduleRef.get<CarsService>(CarsService);
    carsController = moduleRef.get<CarsController>(CarsController);
  });

  describe('getCars', () => {
    it('should return an array of cars', async () => {
      const cars: any = [
        {
          minAge: 18,
          minPrice: 5000,
          _id: '61ea6ec648d8f2138199d46a',
          model: 'Audi',
          insurancePrice: 250,
          universalPercentageOfValue: 0.3,
        },
        {
          minAge: 18,
          minPrice: 5000,
          _id: '61ea6ed248d8f2138199d46b',
          model: 'BMW',
          insurancePrice: 150,
          universalPercentageOfValue: 0.4,
        },
        {
          minAge: 25,
          minPrice: 5000,
          _id: '61ea6eda48d8f2138199d46c',
          model: 'Porsche',
          insurancePrice: 500,
          universalPercentageOfValue: 0.7,
        },
      ];
      jest.spyOn(carsService, 'getCars').mockImplementation(async () => cars);

      expect(await carsController.getCars()).toBe(cars);
    });
    it('should return one car by id', async () => {
      const carId = '61ea6ec648d8f2138199d46a';
      const car: any = {
        minAge: 18,
        minPrice: 5000,
        _id: '61ea6ec648d8f2138199d46a',
        model: 'Audi',
        insurancePrice: 250,
        universalPercentageOfValue: 0.3,
      };
      jest.spyOn(carsService, 'getCar').mockImplementation(async () => car);
      expect(await carsController.getCar(carId)).toBe(car);
    });
  });
});
