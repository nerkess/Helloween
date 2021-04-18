import { Icon } from './card';

export interface GameModel{
  targetScore: number,
  score: number,
  firstClickedCard: Icon,
  secondClickedCard: Icon,
  gameArray: Icon[],
}
