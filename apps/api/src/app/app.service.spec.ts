import { Game } from 'nx-demo/util-interface';
import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  const games: Game[] = [
    {
      description:
        'Help your bug family claim the best real estate in a spilled can of beans.',
      id: 'settlers-in-the-can',
      image: '/assets/beans.png',
      name: 'Settlers in the Can',
      price: 35,
      rating: 0.054005004426627146,
    },
    {
      description: 'A circular game of Chess that you can eat as you play.',
      id: 'chess-coco',
      image: '/assets/chess.png',
      name: 'Chocolate Chess',
      price: 15,
      rating: 0.3475378442362975,
    },
    {
      description: 'A cat grooming contest goes horribly wrong.',
      id: 'purrfection',
      image: '/assets/cat.png',
      name: 'Purrfection',
      price: 45,
      rating: 0.4578375965930528,
    },
  ];

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getAllGames()).toEqual(games);
    });
  });
});
