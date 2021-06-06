export class FillCards{
  static readonly type = '[Game] Fill Cards';
  constructor(public difficulty: string){}
}

export class AddScore{
  static readonly type = '[Game] Add Score';
}

export class GameOver{
  static readonly type = '[Game] Game Over';
}
