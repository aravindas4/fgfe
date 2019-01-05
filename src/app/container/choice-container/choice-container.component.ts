import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChoiceService } from '../../choices/choice.service';
import { Game, Vote, User } from '../../model';
import { Observable, combineLatest } from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choice-container',
  templateUrl: './choice-container.component.html',
  styleUrls: ['./choice-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceContainerComponent implements OnInit {

  games: Observable<Game[]>;
  vote: Observable<Vote>;
  users: Observable<any>;
  user: Observable<User>;

  constructor(private choiceService: ChoiceService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.games = this.choiceService.getGames();
    this.users = this.choiceService.getUsers();
    // console.log(this.games);
    // console.log(this.route.params.value.token);
    // console.log(this.users);
    // this.user = combineLatest(this.users,this.route.params)
    //             .pipe(
    //                 map(([us, routeParams]) =>
    //                 us.find((u) => u.token === routeParams.token)));
    // .subscribe(([users, params]) => {
    //   return params }
    // );
    this.user = combineLatest(this.users,this.route.params)
                .pipe(
                    map(([us, routeParams]) =>
                    us.find((u) => u.token === routeParams.token))).subscribe();

    console.log(this.user.id);
    this.vote = combineLatest(
                  this.choiceService.getVotes(),
                  this.user
                ).pipe(
                  map(([votes, user]) =>
                    votes.find((vote) => vote.user === user.id)
                ));
  // console.log(this.vote);
  }

  updateVote(vote: Vote){
    console.log("choice container "+vote);
    this.choiceService.updateVote(vote);
  }

}
