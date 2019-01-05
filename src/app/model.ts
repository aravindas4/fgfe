export interface Game {
  readonly id: number;
  readonly name: string;
}

export interface User {
  readonly id: number;
  readonly token: string;
  readonly name: string;
}

export interface Vote {
  readonly id: number;
  readonly user: number;
  readonly voted: boolean;
}
