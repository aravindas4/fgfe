import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChoiceErrorHandlerComponent } from './choice-error-handler.component';

@Injectable()
export class ChoiceErrorHandlerService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChoiceErrorHandlerComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }
}
