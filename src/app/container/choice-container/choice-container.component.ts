import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChoiceService } from '../../choices/choice.service';
import { Game, Vote, User, GameUpdate } from '../../model';
import { Observable, combineLatest } from 'rxjs';
import {map, take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-choice-container',
  templateUrl: './choice-container.component.html',
  styleUrls: ['./choice-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceContainerComponent implements OnInit {

  games: Observable<Game[]>;
  vote: Observable<Vote>;
  // users: Observable<any>;
  user: User;

  constructor(private choiceService: ChoiceService,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.games = this.choiceService.getGames();
    console.log(this.games);

    // this.authService.clearToken();
    this.route.params.subscribe((token_obj) => this.authService.setToken(token_obj.token));
    this.vote = this.choiceService.getVote(); //.subscribe((vote) => {this.vote = vote; console.log(this.vote)});
    console.log(this.vote);
    // this.authService.setToken(this.route.params.value.token);
    // console.log(this.authService.getToken());
    // console.log(this.users);
    // this.user = combineLatest(this.users,this.route.params)
    //             .pipe(
    //                 map(([us, routeParams]) =>
    //                 us.find((u) => u.token === routeParams.token)));
    // .subscribe(([users, params]) => {
    //   return params }
    // );


    // console.log(this.user);
  //   this.vote = this.choiceService
  //                 .getVote(this.user.id);
  // console.log(this.vote);
  }

  updateVote(game: GameUpdate){
    console.log(game);
    this.choiceService.updateVote(game);
  }

}
