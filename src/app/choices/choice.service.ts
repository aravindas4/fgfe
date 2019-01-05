import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Game, Vote, User } from '../model';


@Injectable({
  providedIn: 'root',
})
export class ChoiceService {

  private games = new BehaviorSubject<Game[]>([]);
  private votes = new BehaviorSubject<Vote[]>([]);

  // private user = new BehaviorSubject<User>(User);
  private users = new BehaviorSubject<User[]>([]);

  private gurl = `/api/games`;
  private vurl = `/api/votes`;
  private uurl = `/api/users`;

  constructor(private http: HttpClient) {
      this.loadGames();
  }

  private loadGames() {
    this.http.get<Game[]>(this.gurl)
        .subscribe((games) => this.games.next(games));
    this.http.get<Vote[]>(this.vurl)
        .subscribe((votes) => this.votes.next(votes));
    this.http.get<User[]>(this.uurl)
        .subscribe((users) => this.users.next(users));
  }


  getGames() {
    return this.games.asObservable();
  }

  getUser(id: number) {
      // this.http.get<User>(`/api/users/${id}`)
      //   .subscribe((user) => this.user.next(user));
  }

  // getVote(id: number) {
  //   this.http.get<Vote>(`/api/votes/${id}`)
  //     .subscribe((vote) => this.vote.next(vote));
  //   // console.log(this.vote.value.user);
  //   this.getUser(this.vote.value.user);
  //     console.log(this.user);
  // }

  getVotes() {
    return this.votes.asObservable();
  }

  updateVote(vote: Vote) {
    console.log("choice service "+`${vote.id}`);
    this.http.post<Vote>(`/api/votes/${vote.id}`, vote)
              .subscribe(() => this.loadGames());
  }

  getUsers() {
    return this.users.asObservable();
  }
}
