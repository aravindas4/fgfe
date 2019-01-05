import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, Vote, User } from '../../model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() game: Game;
  @Input() vote: Vote;
  @Output() outUpdatedVote = new  EventEmitter<Vote>();
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  userVoted(voted: boolean) {
    console.log("choicen vote ");
    console.log("choice "+voted);
    this.outUpdatedVote.emit({
      ...this.vote,
      voted
    });
  }
}
