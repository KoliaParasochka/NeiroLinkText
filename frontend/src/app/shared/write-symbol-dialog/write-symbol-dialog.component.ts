import { Component, OnInit } from '@angular/core';
import { initCanvas } from '../helpers/canvas-drawer';

@Component({
  selector: 'app-write-symbol-dialog',
  templateUrl: './write-symbol-dialog.component.html',
  styleUrls: ['./write-symbol-dialog.component.scss']
})
export class WriteSymbolDialogComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    initCanvas();
  }

  public onUploadImgBtnClick(): void {

  }
}
