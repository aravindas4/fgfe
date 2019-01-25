import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Game, Vote, User, GameUpdate } from '../model';
import { ChoiceErrorHandlerService} from './choice-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ChoiceService {

  private games = new BehaviorSubject<Game[]>([]);
  private vote = new BehaviorSubject<Vote>(null);

  // private user = new BehaviorSubject<User>(User);
  private user = new BehaviorSubject<User>(null);

  private gurl = `http://192.168.1.45:8000/fg/games/`;
  private vurl = `http://192.168.1.45:8000/fg/votes/`;
  private uurl = `http://192.168.1.45:8000/fg/usertoken/`;

  constructor(private http: HttpClient, private interceptorService: ChoiceErrorHandlerService) {
      this.loadGames();
  }

  private loadGames() {
    // this.http.get<Vote>(this.vurl)
    //     .subscribe((vote) => {
    //       this.vote.next(vote)
    //       console.log(vote);
    //       // this.vote = vote;
    //       console.log(this.vote);
    //       if (!vote.voted) {
    //         this.http.get<Game[]>(this.gurl).pipe(retry(2))
    //             .subscribe((games) => this.games.next(games));
    //       }
    //     });
    this.http.get<Game[]>(this.gurl).pipe(retry(2))
               .subscribe((games) => this.games.next(games));
  }


  getGames() {
    return this.games.asObservable();
  }

  getUser(token: string) {

      this.http.get<User>(this.uurl+token+'/')
        .subscribe((user) => this.user.next(user));
      console.log(this.user.asObservable());
      return this.user.asObservable();

  }

  getVote() {
    return this.vote.asObservable();
  }

  // getVote(id: number) {
  //   this.http.get<Vote>(`/api/votes/${id}`)
  //     .subscribe((vote) => this.vote.next(vote));
  //   // console.log(this.vote.value.user);
  //   this.getUser(this.vote.value.user);
  //     console.log(this.user);
  // }

  // getVotes() {
  //   return this.vote.asObservable();
  // }

  updateVote(game: GameUpdate) {
    console.log(game);
    this.http.post(this.vurl, game)
              .pipe(
                catchError(this.handleError))
                .subscribe(() => { window.alert("Successfully voted!");this.loadGames();});

  }

  handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     if (error.status=== 409) {
       errorMessage = `You've already voted.`;
     } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
   }
   window.alert(errorMessage);
   // this.interceptorService.openDialog();
   return throwError(errorMessage);
 }

}
