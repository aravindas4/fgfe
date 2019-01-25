import { Component, OnInit, EventEmitter,
          ChangeDetectionStrategy, Input,
          Output } from '@angular/core';
import { Game, Vote, User, GameUpdate } from '../../model';
import { ChoiceService } from '../../choices/choice.service';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoicesListComponent implements OnInit {

  @Input() games: Game[];
  @Input() vote: Vote;
  @Output() outUpdatedVote = new  EventEmitter<GameUpdate>();
  @Input() user: User;
  // const votevalue: Vote;
  temp: any = {voted: false};
  constructor(private choiceService: ChoiceService) {
      // console.log(this.user);
   }

  ngOnInit() {
    // this.vote.subscribe(
    //   value => {
    //     this.temp = value;
    //   }
    // )
  }

  updateVote(game: GameUpdate) {
    console.log(game);
    this.outUpdatedVote.emit(game);
  }
}
