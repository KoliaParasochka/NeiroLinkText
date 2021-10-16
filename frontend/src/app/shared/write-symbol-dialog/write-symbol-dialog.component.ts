import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NeiroNetService } from '../../services/neiro-net.service';
import { initCanvas } from '../helpers/canvas-drawer';
import { RecognizeTextModel } from '../models/recognize-text.model';

@Component({
  selector: 'app-write-symbol-dialog',
  templateUrl: './write-symbol-dialog.component.html',
  styleUrls: ['./write-symbol-dialog.component.scss']
})
export class WriteSymbolDialogComponent implements OnInit, OnDestroy {
  private readonly subs: Subscription[] = [];

  constructor(private readonly neiroNetService: NeiroNetService) { }

  public ngOnInit(): void {
    initCanvas();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  public onUploadImgBtnClick(): void {
    const canvas: HTMLCanvasElement = document.getElementById('drawer') as HTMLCanvasElement;
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const arr = image.split(',');

    const model: RecognizeTextModel = new RecognizeTextModel(arr[1]);
    this.subs.push(this.neiroNetService.recognizeText(model).subscribe(response => {
    }));
  }

  //dataURItoBlob(dataURI) {
  //  const byteString = window.atob(dataURI);
  //  const arrayBuffer = new ArrayBuffer(byteString.length);
  //  const int8Array = new Uint8Array(arrayBuffer);
  //  for (let i = 0; i < byteString.length; i++) {
  //    int8Array[i] = byteString.charCodeAt(i);
  //  }
  //  const blob = new Blob([int8Array], { type: 'image/png' });
  //  return blob;
  //}
}
