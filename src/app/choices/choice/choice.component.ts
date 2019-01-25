import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, Vote, User, GameUpdate } from '../../model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() game: Game;
  @Input() vote: Vote;
  @Output() outUpdatedVote = new  EventEmitter<GameUpdate>();
  @Input() user: User;

  constructor() { }

  ngOnInit() {
     // console.log(vote);
  }

  userVoted(id: number) {
    console.log({id});
    this.outUpdatedVote.emit({
      id
    });
  }
}
