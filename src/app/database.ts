import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game, Vote, User } from './model';

// export class Database implements InMemoryDbService {
//   createDb() {
//     const games: Game[] = [
//       { id:1, name: 'Pictionary'},
//       { id:2, name: 'Taboo'},
//       { id:3, name: 'Scotland yard'}
//     ]
//
//     const users: User[] = [
//       { id:1, token: 'aaaa', name: "fire"},
//       { id:2, token: 'bbbb', name: "aqua"},
//       { id:3, token: 'cccc', name: "sand"},
//     ]
//     const votes:Vote[] = [
//       { id: 1, user: users[0].id, voted: false},
//       { id: 1, user: users[1].id, voted: false},
//       { id: 1, user: users[2].id, voted: false},
//     ]
//     return {games, votes, users};
//   }
// }
