import { Injectable } from '@nestjs/common';
import { Game } from 'nx-demo/util-interface';

const games: Game[] = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image: '/assets/beans.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
    description:
      'Help your bug family claim the best real estate in a spilled can of beans.',
    price: 35,
    rating: 0.054005004426627146,
  },
  {
    id: 'chess-coco',
    name: 'Chocolate Chess',
    image: '/assets/chess.png', // 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
    description: 'A circular game of Chess that you can eat as you play.',
    price: 15,
    rating: 0.3475378442362975,
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/cat.png', // 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: 0.4578375965930528,
  },
];

@Injectable()
export class AppService {
  getAllGames = () => games;
  getGame = (id: string) => games.find((game) => game.id === id);
}
