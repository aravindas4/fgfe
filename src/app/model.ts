export interface Game {
  readonly id: number;
  readonly name: string;
  readonly description: string;
}

export interface Vote {
  // readonly id?: number;
  readonly voted: boolean;
}

export interface User {
  readonly id: number;
  readonly token: string;
  readonly username: string;
}

export interface GameUpdate {
  readonly id: number;
}
