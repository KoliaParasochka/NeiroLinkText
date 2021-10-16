import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-show-result-dialog',
  templateUrl: './show-result-dialog.component.html',
  styleUrls: ['./show-result-dialog.component.scss']
})
export class ShowResultDialogComponent {

  constructor(public dialogRef: MatDialogRef<ShowResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public onOkBtn(): void {
    this.dialogRef.close();
  }
}
