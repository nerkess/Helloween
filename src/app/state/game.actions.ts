export class FillCardsArray{
  static readonly type = '[Game] Fill Cards Array';
  constructor(public count: number){}
}

export class GameOver{
  static readonly type = '[Game] Game Over';
}

export class AddScore{
  static readonly type = '[Game] Add Score';
}
