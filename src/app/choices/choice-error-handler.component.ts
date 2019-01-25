import { Component, Inject} from '@angular/core';

@Component({
  selector: 'app-submit-card',
  template: `<h1 mat-dialog-title > You have already voted</h1>
              <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes</button>
              <mat-dialog-actions>`,

})
export class ChoiceErrorHandlerComponent {
  constructor() {}
}
