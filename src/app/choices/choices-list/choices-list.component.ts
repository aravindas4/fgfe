import { Component, OnInit, EventEmitter,
          ChangeDetectionStrategy, Input,
          Output } from '@angular/core';
import { Game, Vote, User } from '../../model';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoicesListComponent implements OnInit {

  @Input() games: Game[];
  @Input() vote: Vote;
  @Output() outUpdatedVote = new  EventEmitter<Vote>();
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

  updateVote(vote: Vote) {
    console.log("choice list "+vote);
    this.outUpdatedVote.emit(vote);
  }
}
